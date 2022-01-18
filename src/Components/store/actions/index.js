/*Campaign Actions*/
export const updateCampName = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'updateName',
            payload: value
        })
    }
}

export const updateCampSumm = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'updateSumm',
            payload: value
        })
    }
}

/*Session Actions*/
export const addSession = (title, text) => {
    return (dispatch) => {
        dispatch({
            type: 'addSession',
            title: title,
            payload: text,
            id: Math.random()
        })
    }
}

export const deleteSession = (target) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteSession',
            payload: target
        })
    }
}