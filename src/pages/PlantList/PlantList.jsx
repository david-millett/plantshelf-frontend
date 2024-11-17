import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Services
import { index } from "../../services/plantService"

// Styles
import styles from './PlantList.module.scss'

const PlantList = () => {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const { data } = await index()
                setPlants(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPlants()
    }, [])

    console.log(plants)

    return (
        <main className={styles.container}>
            <h1>Plants</h1>
            <ul>
                {plants.map(plant => {
                    return (
                        <Link key={plant.id} to={`/plants/${plant.id}/`}>
                            <li>
                                <h3>{plant.common_name}</h3>
                                <p>({plant.genus} {plant.species})</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            
        </main>
    )
}

export default PlantList