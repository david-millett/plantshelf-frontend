//Styles
import styles from './PlantInfo.module.scss'

const PlantInfo = ({ plant }) => {
    return (
        <main className={styles.container}>

            <p>{plant.bio}</p>

            <div>
                <div>
                    <h2>Watering schedule</h2>
                    <p>Water once every {plant.water_interval} days.</p>
                </div>

                <div>
                    <h2>Light conditions</h2>
                    <p>This plant likes {plant.light} light.</p>
                </div>

                <div>
                <h2>Toxicity</h2>
                    {plant.is_toxic
                    ? <p>Be careful! This plant is toxic if eaten by humans or animals.</p>
                    : <p>This plant is not toxic to humans or animals.</p>
                    }
                </div>

                <div>
                    <h2>Difficulty</h2>
                    {plant.difficulty === "beginner" ? <p>This plant is easy to care for and undemanding, suitable for beginners.</p>
                    : plant.difficulty === "medium" ? <p>This plant requires specific but manageable care, and is of medium difficulty.</p>
                    : <p>This plant requires in-depth care and is most suitable for expert plant owners.</p>
                    }
                </div>
            </div>

        </main>
    )
}

export default PlantInfo