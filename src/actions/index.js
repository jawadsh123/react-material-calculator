
export const addHistory = operation => ({
    type: 'ADD_HISTORY',
    operation
})

export const updateCurrent = expression => ({
    type: 'UPDATE_CURRENT',
    expression
})

export const toggleTheme = () => ({
    type: 'TOGGLE_THEME'
})