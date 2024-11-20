import { Link } from "react-router-dom"

// Styles
import styles from './MyPlantList.module.scss'

const MyPlantList = ({ myPlants }) => {
    return (
        <main className={styles.container}>
            <ul>
                {myPlants.map(plant => {
                    return (
                        <Link key={plant.id} to={`/my_plants/${plant.id}/`}>
                            <li>
                                <h3>{plant.nickname}</h3>
                                <img src={plant.species.image} />
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </main>
    )
}

export default MyPlantList