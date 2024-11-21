import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../../utils/auth"

// Styles
import styles from './NavBar.module.scss'

// Icons
import { IconPlant } from "@tabler/icons-react"

// Burger menu
// import { useDisclosure } from "@mantine/hooks"
// import { Burger } from "@mantine/core"

const NavBar = ({ user, setUser }) => {

    // const [opened, { toggle }] = useDisclosure()

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
                    <p><strong>plant</strong>shelf</p>
                </li>
            </Link>

            {/* <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" /> */}

            <div className={styles.menuBlock}>
            <li><Link to="/plants">Plants</Link></li>
            { user ?
                <li><Link to="" onClick={handleSignOut}>Sign Out</Link></li>
                :
                <>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/signin">Sign in</Link></li>
                </>
            }
            </div>
        </ul>
    )
}
export default NavBar