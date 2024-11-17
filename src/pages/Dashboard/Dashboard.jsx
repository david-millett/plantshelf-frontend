// * Components
import MyPlantList from "../../components/MyPlantList/MyPlantList"

const Dashboard = ({ user }) => {
    return (
        <main>
            <h1>Hey, {user.username}!</h1>
            <h2>Water today</h2>
            <p>[plants that need watering go here]</p>
            <h2>My plantshelf</h2>
            <MyPlantList />
        </main>
    )
}

export default Dashboard