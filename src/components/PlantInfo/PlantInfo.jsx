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

            <p>{plant.bio}</p>

            <div>
                <div>
                    <IconDroplet size={35} />
                    <div>
                        <h2>Watering schedule</h2>
                        <p>Water once every {plant.water_interval} days.</p>
                    </div>
                </div>

                <div>
                    { plant.difficulty === 'beginner' ? <IconCircleNumber1 size={35} />
                    : plant.difficulty === 'medium' ? <IconCircleNumber2 size={35} />
                    : <IconCircleNumber3 size={35} />
                    }
                    <h2>Difficulty</h2>
                    {plant.difficulty === "beginner" ? <p>This plant is easy to care for and undemanding, suitable for beginners.</p>
                    : plant.difficulty === "medium" ? <p>This plant requires specific but manageable care, and is of medium difficulty.</p>
                    : <p>This plant requires in-depth care and is most suitable for expert plant owners.</p>
                    }
                </div>

                <div>
                    { plant.light === 'Low' || plant.light === 'Low to Moderate' || plant.light === 'Low to Medium' ? <IconSunLow size={35} color="#EEDE86" /> 
                    : plant.light === 'Moderate' || plant.light === 'Low to Bright' || plant.light === 'Indirect' ? <IconSun size={35} color="#F7B778" />
                    : <IconSunHigh size={35} color="#EE9286" />
                    }
                    <h2>Light conditions</h2>
                    <p>This plant prefers {plant.light} light.</p>
                </div>

                <div>
                    { plant.is_toxic ? <IconSkull size={35} /> : <IconMoodSmile size={35} />}
                    <h2>Toxicity</h2>
                    {plant.is_toxic
                    ? <p>Be careful! This plant is toxic if eaten by humans or animals.</p>
                    : <p>This plant is not toxic to humans or animals.</p>
                    }
                </div>
            </div>

        </main>
    )
}

export default PlantInfo