import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// Services
import { show } from "../../services/plantService"

// Styles
import styles from './PlantDetails.module.scss'

// * Components
import PlantInfo from "../../components/PlantInfo/PlantInfo"

const PlantDetails = () => {

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

            <div className={styles.hero}>
                <div>
                    <h1>{plant.common_name}</h1>
                    <p className="species">{plant.genus} {plant.species}</p>
                    <button>Add to shelf</button>
                </div>
                <img src="https://dummyimage.com/300/ffffff/fff.png" />
            </div>

            <PlantInfo plant={plant} />
            <p><Link to="/plants">Back</Link></p>
        </main>
    )
}

export default PlantDetails