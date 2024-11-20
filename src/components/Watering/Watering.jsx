import { useParams } from "react-router-dom"
import { patchUpdate } from "../../services/myPlantService"

// Styles
import styles from './Watering.module.scss'

// Icons
import { IconDroplet } from '@tabler/icons-react'
import { IconDropletFilled } from "@tabler/icons-react"

const Watering = ({ myPlant, fetchMyPlant }) => {

    const { myPlantId } = useParams()

    // Watering schedule
    const today = new Date()
    const lastWatered = new Date(myPlant.last_watered)
    const difference = lastWatered.getTime() - today.getTime()
    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24))
    const nextWatering = differenceInDays + myPlant.species.water_interval
    const nextWateringDate = new Date (lastWatered.getTime() + (myPlant.species.water_interval * 24 * 60 * 60 * 1000))
    console.log(nextWateringDate)
    console.log(nextWatering)
    console.log(differenceInDays)

    // Format the date
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
            await patchUpdate(myPlantId, {last_watered: yyyymmdd})
            fetchMyPlant()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles.container}>
            <div>
                <h2>Watering</h2>
                
                {differenceInDays === 0
                ? <button onClick={handleSubmit} disabled='true'>
                    <IconDropletFilled size={15} />
                    <p>Watered</p>
                </button>
                : <button onClick={handleSubmit}>
                    <IconDroplet size={15} />
                    <p>Water Me</p>
                </button>
                }

                
                <p>Last watered: 
                    { !myPlant.last_watered ? "This plant hasn't been watered yet"
                    : differenceInDays === 0 ? ' Today'
                    : ` ${myPlant.last_watered}`
                    }
                </p>
                <p>Next watering: 
                    { nextWatering === 0 ? ' Today!'
                    : nextWatering === -1 ? ` Overdue by ${nextWatering * -1} day!`
                    : nextWatering < 0 ? ` Overdue by ${nextWatering * -1} days!`
                    : nextWatering === 1 ? ` Due in ${nextWatering} day`
                    : ` Due in ${nextWatering} days`}
                </p>
            </div>
        </main>
    )
}

export default Watering