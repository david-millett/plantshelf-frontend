import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../../utils/auth"

// Styles
import styles from './NavBar.module.scss'

// Icons
import { IconPlant } from "@tabler/icons-react"

const NavBar = ({ user, setUser }) => {

    const navigate = useNavigate()

    const handleSignOut = () => {
        removeToken()
        setUser(null)
        navigate('/')
    }

    return (
        <ul className={styles.container}>
            <Link to="/">
                <li className={styles.logo}>
                    <IconPlant />
                    <p>plantshelf</p>
                </li>
            </Link>
            <li><Link to="/plants">Plants</Link></li>
            { user ?
                <li><Link to="" onClick={handleSignOut}>Sign Out</Link></li>
                :
                <div>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </div>
            }
        </ul>
    )
}
export default NavBar