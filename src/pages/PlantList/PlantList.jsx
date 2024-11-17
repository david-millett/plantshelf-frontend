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
                                <img className={styles.mainImage} src="https://dummyimage.com/150/ffffff/fff.png" />
                                <div className={styles.plantDetails}>
                                    <div>
                                        <h3>{plant.common_name}</h3>
                                        <p className="species">{plant.genus} {plant.species}</p>
                                    </div>
                                    <div className={styles.icons}>
                                        <img src="https://dummyimage.com/35/ffffff/fff.png" />
                                        <img src="https://dummyimage.com/35/ffffff/fff.png" />
                                        <img src="https://dummyimage.com/35/ffffff/fff.png" />
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            
        </main>
    )
}

export default PlantList