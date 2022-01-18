const reducer = (state = [], action) => {
    switch (action.type) {
        case 'addSession':
            return [
                ...state,
                {
                    title: action.title,
                    text: action.payload,
                    id: action.id
                }
            ]
        case 'deleteSession':
            return state.filter(session => session.id !== action.payload)
        default:
            return state;
    }
}

export default reducer;