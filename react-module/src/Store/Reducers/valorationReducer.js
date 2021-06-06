const valorationReducer = (valoration = {}, action) => {
    switch (action.type) {
        case 'SET_VALORATION':    
            return action.valoration 
        default:
            return valoration
    }
}

export default valorationReducer