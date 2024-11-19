import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/locations/`

// * Index
export const index = () => {
    return axios.get(BASE_URL)
}

// // * Create
// export const create = (formData) => {
//     return axios.post(BASE_URL, formData)
// }

// // * Show
// export const show = (locationId) => {
//     return axios.get(`${BASE_URL}${locationId}/`)
// }