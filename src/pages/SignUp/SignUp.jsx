import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "../../services/userService"

// Styling
import styles from '../../components/MyPlantForm/MyPlantForm.module.scss'

const SignUp = ({ setUser, close }) => {

    // State
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
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
            const { user } = await signup(formData) // sign in
            setUser(user) // set user to state
            close()
            navigate('/') // navigate to dashboard
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles.container}>
            {/* <h1>Sign up</h1> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        name="email"
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
                <div>
                    <label htmlFor="password_confirmation">Confirm password:</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={formData.password_confirmation}
                        name="password_confirmation"
                        onChange={handleChange}
                    />
                </div>

                <button>Sign up</button>
                
                <button onClick={close}>Cancel</button>
                

            </form>
        </main>
    )
}

export default SignUp