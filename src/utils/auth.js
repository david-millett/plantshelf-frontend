const tokenName = 'AUTH_TOKEN'

export const setToken = (token) => {
    localStorage.setItem(tokenName, token)
}

export const getToken = () => {
    return localStorage.getItem(tokenName)
}

export const removeToken = () => {
    localStorage.removeItem(tokenName)
}

export const getUser = () => {
    // Get token from storage
    const token = getToken()
    if (!token) return null

    // Extract payload
    const payload = JSON.parse(atob(token.split('.')[1]))

    // Return the payload
    return payload
}