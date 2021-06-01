const userReducer = (user = {}, action) => {
    switch (action.type) {
        case 'GET_USER':    
            return action.user 
        default:
            return user
    }
}

export default userReducer