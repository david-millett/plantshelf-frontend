import axios from './interceptors'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/my_plants/`

// * Index
export const index = () => {
    return axios.get(BASE_URL)
}

// * Create
export const create = (formData) => {
    return axios.post(BASE_URL, formData)
}

// * Show
export const show = (myPlantId) => {
    return axios.get(`${BASE_URL}${myPlantId}/`)
}

// * Delete
export const deleteMyPlant = (myPlantId) => {
    return axios.delete(`${BASE_URL}${myPlantId}/`)
}

// * Update
export const update = (myPlantId, formData) => {
    return axios.put(`${BASE_URL}${myPlantId}/`, formData)
}

// * Patch Update
export const patchUpdate = (myPlantId, formData) => {
    return axios.patch(`${BASE_URL}${myPlantId}/`, formData)
}