import { Link } from "react-router-dom"
import { patchUpdate } from "../../services/myPlantService"

// Styles
import styles from './WaterToday.module.scss'

// Components
// import Loading from "../Loading/Loading"

// Icons
import { IconDroplet } from '@tabler/icons-react'
import { IconDropletFilled } from "@tabler/icons-react"

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
    
    let total = 0
        
    return (
        <main className={styles.container}>
            <ul>
                {myPlants.map(plant => {
                    const lastWatered = new Date(plant.last_watered)
                    const difference = lastWatered.getTime() - today.getTime()
                    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24))
                    const nextWatering = differenceInDays + plant.species.water_interval
                    if (nextWatering < 1 || differenceInDays === 0) {
                        total = total + 1
                        return (
                            <li key={plant.id}>
                                <Link to={`/my_plants/${plant.id}/`}>
                                    <h3>{plant.nickname}</h3>
                                    <img src={plant.species.image} alt={plant.species.common_name} />
                                </Link>
                                <p>{plant.location.name}</p>

                                {differenceInDays === 0
                                ? <button id={plant.id} onClick={handleSubmit} disabled={true}>
                                    <IconDropletFilled size={15}/>
                                    <p id={plant.id}>Watered</p>
                                </button>
                                : <button id={plant.id} onClick={handleSubmit}>
                                    <IconDroplet size={15}/>
                                    <p id={plant.id}>Water me</p>
                                </button>
                                }
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
                {/* {myPlants.length === 0 ? <Loading />
                : total === 0 ? <li className={styles.nothing}>No tasks today!</li>
                : ''
                } */}
                {total === 0 ? <li className={styles.nothing}>No tasks today!</li> : ''}
            </ul>
        </main>
    )
}

export default WaterToday