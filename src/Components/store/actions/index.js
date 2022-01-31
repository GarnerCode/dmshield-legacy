/*import { actionCreators } from ".."*/

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

/*Character Actions*/
export const addChar = (formData) => {
    return (dispatch) => {
        dispatch({
            type: 'addChar',
            charId: Math.random(),
            charName: formData.charName,
            charLevel: formData.charLevel,
            charRace: formData.charRace,
            charClass: formData.charClass,
            charAc: formData.charAc,
            charInit: formData.charInit,
            charSpeed: formData.charSpeed,
            charHp: formData.charHp,
            charHit: formData.charHit,
            charProf: formData.charProf,
            charStr: formData.charStr,
            charDex: formData.charDex,
            charCon: formData.charCon,
            charInt: formData.charInt,
            charWis: formData.charWis,
            charCha: formData.charCha,
        })
    }
}

export const deleteChar = (charId) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteChar',
            payload: charId
        })
    }
}

export const editChar = (values, charId) => {
    return (dispatch) => {
        dispatch({
            type: 'editChar',
            payload: values,
            charId: charId
        })
    }
}