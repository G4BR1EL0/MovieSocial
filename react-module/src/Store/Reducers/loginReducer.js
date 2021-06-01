const loginReducer = (token = {}, action) => {
    switch (action.type) {
        case 'GET_TOKEN':    
            return {
                jwt: action.token,
                error: false
            }
        case 'LOGIN_ERROR':    
            return {
                jwt: "",
                error: true
            }
        default:
            return token
    }
}

export default loginReducer