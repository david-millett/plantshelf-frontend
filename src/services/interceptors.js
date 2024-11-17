import axios from 'axios'
import { getToken } from '../utils/auth'

const axiosAuth = axios.create()

axiosAuth.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axiosAuth