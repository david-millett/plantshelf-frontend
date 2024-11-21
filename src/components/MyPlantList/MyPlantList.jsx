import { Link } from "react-router-dom"

// Styles
import styles from './MyPlantList.module.scss'

// Components
import EmptyShelf from "../EmptyShelf/EmptyShelf"

const MyPlantList = ({ myPlants }) => {

    console.log(myPlants.length % 3)

    return (
        <main className={styles.container}>
            <ul>
                <li>
                    <div className={styles.shelfTopShadow}></div>
                    <div className={styles.shelfTop}></div>
                </li>
                {myPlants.map(plant => {
                    return (
                        <Link key={plant.id} to={`/my_plants/${plant.id}/`}>
                            <li>
                                <h3>{plant.nickname}</h3>
                                <img src={plant.species.image} />
                                <div className={styles.shelfShadow}></div>
                                <div className={styles.shelfFloor}></div>
                            </li>
                        </Link>
                    )
                })}
                {myPlants.length % 3 === 2 ? <EmptyShelf />
                : myPlants.length % 3 === 1 ? <><EmptyShelf /><EmptyShelf/></>
                : myPlants.length === 0 ? <><EmptyShelf /><EmptyShelf/><EmptyShelf/></>
                : ''
                }
            </ul>
        </main>
    )
}

export default MyPlantList