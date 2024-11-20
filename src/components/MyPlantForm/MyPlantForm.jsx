import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Styles
import styles from './MyPlantForm.module.scss'

// Services
import { create, show, update } from "../../services/myPlantService"
import { index } from "../../services/locationService"

const MyPlantForm = ({ close, fetchMyPlant, plant }) => {

    const { plantId } = useParams()
    const { myPlantId } = useParams()

    
    // State
    const [formData, setFormData] = useState({
        nickname: '',
        height: '',
        location: '',
        last_watered: '',
        species: plantId
    })

    const [locations, setLocations] = useState([])
    
    // Location variables
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMyPlant = async () => {
            try {
                const { data } = await show(myPlantId)
                data.species = data.species.id
                data.owner = data.owner.id
                data.location = data.location.id
                setFormData(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (myPlantId) fetchMyPlant()
    }, [myPlantId])

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const { data } = await index()
                setLocations(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLocations()
    }, [])

    // Event handlers
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res
            if (myPlantId) {
                res = await update(myPlantId, formData)
                close()
                fetchMyPlant()
            } else {
                res = await create(formData)
                navigate(`/my_plants/${res.data.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(locations)

    return (
        <main className={styles.container}>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nickname">Nickname</label>
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        placeholder="Spike"
                    />
                </div>
                <div>
                    <label htmlFor="height">Height (cm)</label>
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <select id="location" name="location" onChange={handleChange}>
                        <option>{ myPlantId ? plant.location.name : '-- select an option --'}</option>
                        {locations.map(location => {
                            return (
                                <option key={location.id} value={location.id}>{location.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="last_watered">Last watered</label>
                    <input
                        type="date"
                        id="last_watered"
                        name="last_watered"
                        value={formData.last_watered}
                        onChange={handleChange}
                    />
                </div>

                <button>{ myPlantId ? 'Save' : 'Add'}</button>
                <button onClick={close}>Cancel</button>

            </form>
        </main>
    )
}

export default MyPlantForm