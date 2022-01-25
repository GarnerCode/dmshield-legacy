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
            id: Math.random(),
            charName: formData.charName,
            race: formData.race,
            charClass: formData.charClass,
            armorClass: formData.armorClass,
            initiative: formData.initiative,
            speed: formData.speed,
            hitMax: formData.hitMax,
            hitDice: formData.hitDice,
            profBonus: formData.profBonus,
            strength: formData.strength,
            dexterity: formData.dexterity,
            constitution: formData.constitution,
            intelligence: formData.intelligence,
            wisdom: formData.wisdom,
            charisma: formData.charisma,
            charNotes: formData.charNotes
        })
    }
}

export const deleteChar = (target) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteChar',
            payload: target
        })
    }
}