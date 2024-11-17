import { Link } from "react-router-dom"

const NavBar = ({ user }) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            { user ?
                <li>Sign out</li>
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