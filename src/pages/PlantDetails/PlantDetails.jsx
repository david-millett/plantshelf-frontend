import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// Services
import { show } from "../../services/plantService"

// Styles
import styles from './PlantDetails.module.scss'

const PlantShow = () => {

    const [plant, setPlant] = useState(null)
    const [errors, setErrors] = useState(null)

    // Location variables
    const { plantId } = useParams()

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const { data } = await show(plantId)
                setPlant(data)
            } catch (error) {
                console.log(error.response.data)
                setErrors(error.response.data)
            }
        }
        fetchPlant()
    }, [plantId])

console.log(plant)

// Render error message
if (errors) return <p className="error">{errors.errorMessage}</p>

// Render loading message
if (!plant) return <p>Loading...</p>

    return (
        <main className={styles.container}>
            <h1>{plant.common_name}</h1>
            <p>{plant.genus} {plant.species}</p>
            <p>{plant.bio}</p>
            <p><Link to="/plants">Back</Link></p>
        </main>
    )
}

export default PlantShow