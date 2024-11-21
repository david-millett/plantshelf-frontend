import { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Mantine modal menu
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

// Services
import { deleteMyPlant, show } from "../../services/myPlantService"

// Styles
import styles from './MyPlantDetails.module.scss'

// * Components
import PlantInfo from "../../components/PlantInfo/PlantInfo"
import MyPlantForm from "../../components/MyPlantForm/MyPlantForm";
import Watering from "../../components/Watering/Watering";

const MyPlantDetails = () => {

    const [myPlant, setMyPlant] = useState(null)
    const [errors, setErrors] = useState(null)
    const [opened, { open, close }] = useDisclosure(false);

    // Location variables
    const { myPlantId } = useParams()
    const navigate = useNavigate()

    // Event handlers
    const handleDeleteMyPlant = async () => {
        try {
            await deleteMyPlant(myPlantId)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const fetchMyPlant = useCallback(async () => {
        try {
            const { data } = await show(myPlantId)
            setMyPlant(data)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }, [myPlantId])

    useEffect(() => {
        fetchMyPlant()
    }, [myPlantId, fetchMyPlant])

    console.log(myPlant)

    // Render error message
    if (errors) return <p className="error">{errors.errorMessage}</p>

    // Render loading message
    if (!myPlant) return <p>Loading...</p>

    return (
        <main className={styles.container}>

            
            <div className={styles.hero}>
                <div>
                    <h1>{myPlant.nickname}</h1>
                    <p>{myPlant.species.common_name}</p>
                    <p className={styles.species}>{myPlant.species.genus} {myPlant.species.species}</p>
                    <p className={styles.heroInfo}><strong>Location: </strong>{myPlant.location.name}</p>
                    <p className={styles.heroInfo}><strong>Added: </strong>{myPlant.added_on}</p>
                    
                    <Modal
                        opened={opened}
                        onClose={close}
                        title={`Edit ${myPlant.nickname}`}
                        overlayProps={{backgroundOpacity: 0.55, blur: 2}}
                        centered
                    >
                        {<MyPlantForm close={close} fetchMyPlant={fetchMyPlant} plant={myPlant} />}
                    </Modal>
                    <button onClick={open}>Edit</button>

                    <button onClick={handleDeleteMyPlant}>Delete</button>
                </div>
                <img src={myPlant.species.image} alt={myPlant.species.common_name} />
            </div>

            <Watering myPlant={myPlant} fetchMyPlant={fetchMyPlant} />

            <h2 className={styles.infoHeading}>{myPlant.species.common_name} Information</h2>
            <PlantInfo plant={myPlant.species} />
        </main>
    )
}

export default MyPlantDetails