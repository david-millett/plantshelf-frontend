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

// Components
import Loading from "../../components/Loading/Loading"

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

                                        { plant.difficulty === 'beginner' ? <IconCircleNumber1 size={25} />
                                        : plant.difficulty === 'medium' ? <IconCircleNumber2 size={25} />
                                        : <IconCircleNumber3 size={25} />
                                        }

                                        { plant.light === 'Low' || plant.light === 'Low to Moderate' || plant.light === 'Low to Medium' ? <IconSunLow size={25} color="#EEDE86" /> 
                                        : plant.light === 'Moderate' || plant.light === 'Low to Bright' || plant.light === 'Indirect' ? <IconSun size={25} color="#F7B778" />
                                        : <IconSunHigh size={25} color="#EE9286" />
                                        }

                                        { plant.is_toxic ? <IconSkull size={25} /> : ''}

                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
                {plants.length === 0 ? <Loading /> : ''}
            </ul>
            
        </main>
    )
}

export default PlantList