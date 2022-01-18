const reducer = (state = 'My Campaign', action) => {
    switch (action.type) {
        case 'updateName':
            return action.payload.target.value
        default:
            return state;
    }
}

export default reducer;