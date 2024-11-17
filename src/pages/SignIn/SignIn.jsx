import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../../services/userService"

const SignIn = ({ setUser }) => {

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
            navigate('/') // navigate to dashboard
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <h1>Sign in</h1>
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
                <div>
                    <button>Sign In</button>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    )
}

export default SignIn