import banner from '../../assets/images/indoorplants.jpg'

// styles
import styles from './Landing.module.scss'

const Landing = () => {
    return (
        <main className={styles.container}>
            <div className={styles.banner}>
                <h2>Keep track of your plants with <strong>plant</strong>shelf</h2>
                <img src={banner} alt='House plants on a shelf' />
            </div>
            <div className={styles.features}>
                <div>
                    <h3>Research</h3>
                    <p>Browse popular houseplants</p>
                </div>
                <div>
                    <h3>Cultivate</h3>
                    <p>Add plants to your shelf</p>
                </div>
                <div>
                    <h3>Care</h3>
                    <p>Track watering schedules</p>
                </div>
            </div>
        </main>
    )
}

export default Landing