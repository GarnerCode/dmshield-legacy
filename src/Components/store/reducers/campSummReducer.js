const reducer = (state = 'Summary of my campaign', action) => {
    switch (action.type) {
        case 'updateSumm':
            return action.payload.target.value
        default:
            return state;
    }
}

export default reducer;