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
    const payload = JSON.parse( // convert JSON string into JS Object
    atob( // Decode B64 encoded string
      token.split('.')[1] // Get the middle string of the JSON Web Token (the payload string)
    )  
)

    // Return the payload
    return payload
}