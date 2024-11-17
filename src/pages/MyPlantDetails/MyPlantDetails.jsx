import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import { show } from "../../services/myPlantService"

// Styles
import styles from './MyPlantDetails.module.scss'

// * Components
import PlantInfo from "../../components/PlantInfo/PlantInfo"

const MyPlantDetails = () => {

    const [myPlant, setMyPlant] = useState(null)
    const [errors, setErrors] = useState(null)

    // Location variables
    const { myPlantId } = useParams()

    useEffect(() => {
        const fetchMyPlant = async () => {
            try {
                const { data } = await show(myPlantId)
                setMyPlant(data)
            } catch (error) {
                console.log(error.response.data)
                setErrors(error.response.data)
            }
        }
        fetchMyPlant()
    }, [myPlantId])

console.log(myPlant)

// Render error message
if (errors) return <p className="error">{errors.errorMessage}</p>

// Render loading message
if (!myPlant) return <p>Loading...</p>

    return (
        <main className={styles.container}>

            <h1>{myPlant.nickname}</h1>
            
            <p>{myPlant.species.common_name}</p>
            <p className="species">{myPlant.species.genus} {myPlant.species.species}</p>
            <p><strong>Location: </strong>{myPlant.location.name}</p>
            <p><strong>Added: </strong>{myPlant.added_on}</p>
            
            <h2>Watering</h2>
            <button>Mark as watered</button>
            <p>Last watered: {myPlant.last_watered}</p>
            <p>Next watering: Figure this out</p>
            
            <button>Update</button>
            <button>Delete</button>

            <h2>{myPlant.species.common_name} Information</h2>
            <PlantInfo plant={myPlant.species} />
        </main>
    )
}

export default MyPlantDetails