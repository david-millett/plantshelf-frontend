import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// Mantine modal menu
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

// Services
import { show } from "../../services/plantService"

// Styles
import styles from './PlantDetails.module.scss'

// * Components
import PlantInfo from "../../components/PlantInfo/PlantInfo"
import MyPlantForm from "../../components/MyPlantForm/MyPlantForm";
import Loading from "../../components/Loading/Loading";

const PlantDetails = ({ user }) => {

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

// Render error message
if (errors) return <p className="error">{errors.errorMessage}</p>

// Render loading message
if (!plant) return <Loading />

    return (
        <main className={styles.container}>

            <div className={styles.hero}>
                <div>
                    <h1>{plant.common_name}</h1>
                    <p className="species">{plant.genus} {plant.species}</p>
                    
                    <Modal
                        opened={opened}
                        onClose={close}
                        title={`Add new ${plant.common_name}`}
                        overlayProps={{backgroundOpacity: 0.55, blur: 2}}
                        centered
                    >
                        {<MyPlantForm close={close} />}
                    </Modal>
                    <button onClick={open} disabled={user ? false : true}>Add to shelf</button>
                
                </div>
                <img src={plant.image} alt={plant.common_name} />
            </div>

            <PlantInfo plant={plant} />

            <p className={styles.backLink}><Link to="/plants">Back</Link></p>

        </main>
    )
}

export default PlantDetails