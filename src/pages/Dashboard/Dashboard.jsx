import { useState, useEffect, useCallback } from "react"

// Services
import { index } from "../../services/myPlantService"

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
        <main>
            <h1>Welcome back</h1>
            {/* <img src="https://res.cloudinary.com/dpypzuxf5/image/upload/v1732118476/spiderplant_qzowx6.png" /> */}
            <h2>Water today</h2>
            <WaterToday myPlants={myPlants} fetchMyPlants={fetchMyPlants} />
            <h2>My plantshelf</h2>
            <MyPlantList myPlants={myPlants} />
        </main>
    )
}

export default Dashboard