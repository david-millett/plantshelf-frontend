import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../../utils/auth"

// Styles
import styles from './NavBar.module.scss'

// Icons
import { IconPlant } from "@tabler/icons-react"

// Components
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import SignInPopUp from "../SignInPopUp/SignInPopUp";

const NavBar = ({ user, setUser }) => {

    const navigate = useNavigate()

    const handleSignOut = async () => {
        await removeToken()
        setUser(null)
        navigate('/')
    }

    return (
        <ul className={styles.container}>
            <Link to="/">
                <li className={styles.logo}>
                    <IconPlant />
                    <p><strong>plant</strong>shelf</p>
                </li>
            </Link>

            <div className={styles.menuBlock}>
                <li><Link to="/plants">Plants</Link></li>
                { user ?
                    <Link onClick={handleSignOut}>Sign out</Link>
                    :
                    <>
                        <SignUpPopUp setUser={setUser} />
                        <SignInPopUp setUser={setUser} />
                    </>
                }
            </div>
        </ul>
    )
}
export default NavBar