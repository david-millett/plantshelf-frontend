import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Services
import { index } from "../../services/myPlantService"

// Styles
import styles from './MyPlantList.module.scss'

const MyPlantList = () => {

    const [myPlants, setMyPlants] = useState([])

    useEffect(() => {
        const fetchMyPlants = async () => {
            try {
                const { data } = await index()
                setMyPlants(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyPlants()
    }, [])

    console.log(myPlants)

    return (
        <main className={styles.container}>
            <ul>
                {myPlants.map(plant => {
                    return (
                        <Link key={plant.id} to={`/my_plants/${plant.id}/`}>
                            <li>
                                <h3>{plant.nickname}</h3>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            
        </main>
    )
}

export default MyPlantList