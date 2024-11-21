// Styles
import styles from './EmptyShelf.module.scss'

const EmptyShelf = () => {
    return (
        <li>
            <div className={styles.emptyShelfBack}></div>
            <div className={styles.emptyShelfShadow}></div>
            <div className={styles.emptyShelfFloor}></div>
        </li>
    )
}

export default EmptyShelf