import axios from "axios"
import { setToken } from "../../utils/auth"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users/`

export const signup = async (formData) => {
    // Sign up a user
    const { data } = await axios.post(`${BASE_URL}signup/`, formData)

    // Set the token to local storage
    if (data.token) {
        setToken(data.token)
    }

    return data
}