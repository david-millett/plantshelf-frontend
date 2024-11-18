import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// Styles
import styles from './MyPlantForm.module.scss'

// Services
import { create } from "../../services/myPlantService"

const MyPlantForm = ({ plant }) => {

    // State
    const [formData, setFormData] = useState({
        nickname: '',
        height: '',
        location: 1, // ! Need to do this properly
        last_watered: '',
        species: plant.id
    })

    // Location variables
    const navigate = useNavigate()

    // Event handlers
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await create(formData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles.container}>
            {/* <h1>Create</h1> */}

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

                {/* <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="number"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div> */}

                {/* <div>
                    <label htmlFor="location">Location:</label>
                    <select id="location" name="location">
                        <option value="1">Test</option>
                    </select>
                </div> */}

                {/* <fieldset>
                    <legend>Location:</legend>
                    <input type="radio" id="low" name="priceRange" value="¥" />
                    <label htmlFor="low">Low</label>
                    <input type="radio" id="mid" name="priceRange" value="¥¥" />
                    <label htmlFor="mid">Mid</label>
                    <input type="radio" id="high" name="priceRange" value="¥¥¥" />
                    <label htmlFor="high">High</label>
                </fieldset> */}

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

                <button>Add</button>
            </form>
        </main>
    )
}

export default MyPlantForm