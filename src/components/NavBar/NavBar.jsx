import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../../utils/auth"

// Styles
import styles from './NavBar.module.scss'

const NavBar = ({ user, setUser }) => {

    const navigate = useNavigate()

    const handleSignOut = () => {
        removeToken()
        setUser(null)
        navigate('/')
    }

    return (
        <ul className={styles.container}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            { user ?
                <li><Link to="" onClick={handleSignOut}>Sign Out</Link></li>
                :
                <>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </>
            }
        </ul>
    )
}
export default NavBar