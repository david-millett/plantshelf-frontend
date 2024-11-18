import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// Mantine modal menu
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

// Services
import { show } from "../../services/plantService"

// Styles
import styles from './PlantDetails.module.scss'

// * Components
import PlantInfo from "../../components/PlantInfo/PlantInfo"
import MyPlantForm from "../../components/MyPlantForm/MyPlantForm";

const PlantDetails = () => {

    const [plant, setPlant] = useState(null)
    const [errors, setErrors] = useState(null)
    const [opened, { open, close }] = useDisclosure(false);

    // Location variables
    const { plantId } = useParams()

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const { data } = await show(plantId)
                setPlant(data)
            } catch (error) {
                console.log(error.response.data)
                setErrors(error.response.data)
            }
        }
        fetchPlant()
    }, [plantId])

console.log(plant)

// Render error message
if (errors) return <p className="error">{errors.errorMessage}</p>

// Render loading message
if (!plant) return <p>Loading...</p>

    return (
        <main className={styles.container}>

            <div className={styles.hero}>
                <div>
                    <h1>{plant.common_name}</h1>
                    <p className="species">{plant.genus} {plant.species}</p>
                    

                    <Modal opened={opened} onClose={close} title="Add to shelf">
                        {<MyPlantForm plant={plant} />}
                    </Modal>

                    <Button onClick={open}>Add to shelf</Button>


                    <Link to={`/plants/${plantId}/create`}>
                        <button>Add to shelf</button>
                    </Link>
                
                </div>
                <img src="https://dummyimage.com/300/ffffff/fff.png" />
            </div>

            <PlantInfo plant={plant} />
            <p><Link to="/plants">Back</Link></p>
        </main>
    )
}

export default PlantDetails