import loadingGif from '../../assets/images/loadinggif.gif'

// Styles
import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <main className={styles.container}>
            <img src={loadingGif} />
            <p>Loading...</p>
        </main>
    )
}

export default Loading