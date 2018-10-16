const history = (state = [], action) => {
    switch(action.type) {
        case 'ADD_HISTORY':
            return [
                ...state,
                action.operation
            ]
        default:
            return state
    }
}

export default history;