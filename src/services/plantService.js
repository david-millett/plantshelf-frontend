import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`

// * Index
export const index = () => {
    return axios.get(BASE_URL)
}

// * Create
export const create = (formData) => {
    return axios.post(BASE_URL, formData)
}

// * Show
export const show = (plantId) => {
    return axios.get(`${BASE_URL}/${plantId}`)
}