import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Services
import { index } from "../../services/plantService"

// Styles
import styles from './PlantList.module.scss'

// Icons
import { IconSkull } from "@tabler/icons-react"
import { IconSunLow } from "@tabler/icons-react"
import { IconSunHigh } from "@tabler/icons-react"
import { IconSun } from "@tabler/icons-react"
import { IconCircleNumber1 } from "@tabler/icons-react"
import { IconCircleNumber2 } from "@tabler/icons-react"
import { IconCircleNumber3 } from "@tabler/icons-react"

const PlantList = () => {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const { data } = await index()
                setPlants(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPlants()
    }, [])

    console.log(plants)

    return (
        <main className={styles.container}>
            <h1>Plants</h1>
            <ul>
                {plants.map(plant => {
                    return (
                        <Link key={plant.id} to={`/plants/${plant.id}/`}>
                            <li>
                                <img className={styles.mainImage} src={plant.image} alt={plant.common_name} />
                                <div className={styles.plantDetails}>
                                    <div>
                                        <h3>{plant.common_name}</h3>
                                        <p className="species">{plant.genus} {plant.species}</p>
                                    </div>
                                    <div className={styles.icons}>
                                        {/* <img src="https://dummyimage.com/35/ffffff/fff.png" /> */}
                                        {/* <img src="https://dummyimage.com/35/ffffff/fff.png" /> */}
                                        {/* <img src="https://dummyimage.com/35/ffffff/fff.png" /> */}

                                        { plant.difficulty === 'beginner' ? <IconCircleNumber1 size={35} />
                                        : plant.difficulty === 'medium' ? <IconCircleNumber2 size={35} />
                                        : <IconCircleNumber3 size={35} />
                                        }

                                        { plant.light === 'Low' || plant.light === 'Low to Moderate' || plant.light === 'Low to Medium' ? <IconSunLow size={35} color="#EEDE86" /> 
                                        : plant.light === 'Moderate' || plant.light === 'Low to Bright' || plant.light === 'Indirect' ? <IconSun size={35} color="#F7B778" />
                                        : <IconSunHigh size={35} color="#EE9286" />
                                        }

                                        { plant.is_toxic ? <IconSkull size={35} /> : ''}

                                        {/* Low
                                        Low to Moderate
                                        Low to Medium

                                        Moderate
                                        Low to Bright
                                        Indirect

                                        Bright
                                        Bright Indirect */}


                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            
        </main>
    )
}

export default PlantList