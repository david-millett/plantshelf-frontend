import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"

// Services
import { index } from "../../services/myPlantService"

// Styles
import styles from './Dashboard.module.scss'

// * Components
import MyPlantList from "../../components/MyPlantList/MyPlantList"
import WaterToday from "../../components/WaterToday/WaterToday"

const Dashboard = () => {

    const [myPlants, setMyPlants] = useState([])

    const fetchMyPlants = useCallback(async () => {
        try {
            const { data } = await index()
            setMyPlants(data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchMyPlants()
    }, [fetchMyPlants])

    return (
        <main className={styles.container}>
            <h1>Welcome back!</h1>
            {/* <img src="https://res.cloudinary.com/dpypzuxf5/image/upload/v1732118476/spiderplant_qzowx6.png" /> */}
            <h2 className={styles.header}>Water today</h2>
            <WaterToday myPlants={myPlants} fetchMyPlants={fetchMyPlants} />
            <div className={styles.header}>
                <h2>My plantshelf</h2>
                <Link to='/plants'>Add plants</Link>
            </div>
            <MyPlantList myPlants={myPlants} />
        </main>
    )
}

export default Dashboard