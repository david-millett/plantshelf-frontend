import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signin } from "../../services/userService"

// Styling
import styles from '../../components/MyPlantForm/MyPlantForm.module.scss'

const SignIn = ({ setUser, close }) => {

    // State
    const [formData, setFormData] = useState({
        username_or_email: '',
        password: ''
    })

    // Location variables
    const navigate = useNavigate()

    // Event handlers
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { user } = await signin(formData) // sign in
            setUser(user) // set user to state
            close()
            navigate('/') // navigate to dashboard
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles.container}>
            {/* <h1>Sign in</h1> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username or Email:</label>
                    <input
                        type="text"
                        id="username_or_email"
                        value={formData.username_or_email}
                        name="username_or_email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <button>Sign in</button>
                <button onClick={close}>Cancel</button>
            </form>
        </main>
    )
}

export default SignIn