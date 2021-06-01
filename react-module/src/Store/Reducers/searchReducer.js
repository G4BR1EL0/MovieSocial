const searchReducer = (criteria = "", action) => {
    switch (action.type) {
        case 'SET_CRITERIA':    
            return action.criteria
        default:
            return criteria
    }
}

export default searchReducer