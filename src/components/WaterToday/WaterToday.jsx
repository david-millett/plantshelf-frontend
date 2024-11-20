import { Link } from "react-router-dom"
import { patchUpdate } from "../../services/myPlantService"

// Styles
import styles from './WaterToday.module.scss'

const WaterToday = ({ myPlants, fetchMyPlants }) => {

    // Format the date
    const today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() +1
    const yyyy = today.getFullYear()
    if (dd < 10) {dd = '0' + dd}
    if (mm < 10) {mm = '0' + mm}
    const yyyymmdd = `${yyyy}-${mm}-${dd}`

    // Event handlers
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const myPlantId = e.target.id
            await patchUpdate(myPlantId, {last_watered: yyyymmdd})
            fetchMyPlants()
        } catch (error) {
            console.log(error)
        }
    }
        
    return (
        <main className={styles.container}>
            <ul>
                {myPlants.map(plant => {
                    const lastWatered = new Date(plant.last_watered)
                    const difference = lastWatered.getTime() - today.getTime()
                    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24))
                    const nextWatering = differenceInDays + plant.species.water_interval
                    if (nextWatering < 1 || differenceInDays === 0) {
                        return (
                            <li key={plant.id}>
                                <Link to={`/my_plants/${plant.id}/`}>
                                    <h3>{plant.nickname}</h3>
                                    <img src="https://dummyimage.com/120/ffffff/fff.png" />
                                </Link>
                                <p>{plant.location.name}</p>
                                <button id={plant.id} onClick={handleSubmit} disabled={differenceInDays === 0 ? true : false}>
                                    {differenceInDays === 0 ? 'Watered' : 'Water me'}
                                </button>
                                <p>
                                    {nextWatering === -1 ? ` ${nextWatering * -1} day overdue`
                                    : nextWatering < -1 ? ` ${nextWatering * -1} days overdue`
                                    : ''
                                    }
                                </p>
                            </li>
                        )
                    }
                })}
            </ul>
        </main>
    )
}

export default WaterToday