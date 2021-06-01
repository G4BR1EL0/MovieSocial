
export const loginAction = (token) => {
    return{
        type: 'GET_TOKEN',
        token
    }
}
export const loginActionError = (msg) => {
    return{
        type: 'LOGIN_ERROR',
        msg
    }
}
export const getUserAction = (user) => {
    return{
        type: 'GET_USER',
        user
    }
}