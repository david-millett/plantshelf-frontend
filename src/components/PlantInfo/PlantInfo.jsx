//Styles
import styles from './PlantInfo.module.scss'

// Icons
import { IconSkull } from "@tabler/icons-react"
import { IconSunLow } from "@tabler/icons-react"
import { IconSunHigh } from "@tabler/icons-react"
import { IconSun } from "@tabler/icons-react"
import { IconCircleNumber1 } from "@tabler/icons-react"
import { IconCircleNumber2 } from "@tabler/icons-react"
import { IconCircleNumber3 } from "@tabler/icons-react"
import { IconDroplet } from '@tabler/icons-react'
import { IconMoodSmile } from '@tabler/icons-react'

const PlantInfo = ({ plant }) => {
    return (
        <main className={styles.container}>

            <p className={styles.bio}>{plant.bio}</p>

            <div className={styles.careDetailsContainer}>

                <div className={styles.careDetails}>
                    <IconDroplet size={50} />
                    <div>
                        <h2>Watering schedule</h2>
                        <p>Water once every {plant.water_interval} days.</p>
                    </div>
                </div>

                <div className={styles.careDetails}>
                    { plant.difficulty === 'beginner' ? <IconCircleNumber1 size={50} />
                    : plant.difficulty === 'medium' ? <IconCircleNumber2 size={50} />
                    : <IconCircleNumber3 size={50} />
                    }
                    <div>
                        <h2>Difficulty</h2>
                        <p>
                            {plant.difficulty === "beginner" ? 'This plant is easy to care for and undemanding, suitable for beginners.'
                            : plant.difficulty === "medium" ? 'This plant requires specific but manageable care.'
                            : 'This plant requires in-depth and specific care.'
                            }
                    </p>
                    </div>
                </div>

                <div className={styles.careDetails}>
                    { plant.light === 'Low' || plant.light === 'Low to Moderate' || plant.light === 'Low to Medium' ? <IconSunLow size={50} color="#EEDE86" /> 
                    : plant.light === 'Moderate' || plant.light === 'Low to Bright' || plant.light === 'Indirect' ? <IconSun size={50} color="#F7B778" />
                    : <IconSunHigh size={50} color="#EE9286" />
                    }
                    <div>
                        <h2>Light conditions</h2>
                        <p>This plant prefers {plant.light} light.</p>
                    </div>
                </div>

                <div className={styles.careDetails}>
                    { plant.is_toxic ? <IconSkull size={50} /> : <IconMoodSmile size={50} />}
                    <div>
                        <h2>Toxicity</h2>
                        {plant.is_toxic
                        ? <p>Be careful! This plant is toxic if eaten by humans or animals.</p>
                        : <p>This plant is not toxic to humans or animals.</p>
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}

export default PlantInfo