import { actionCreators } from ".."

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
export const addChar = (
    charName,
    race,
    charClass,
    armorClass,
    initiative,
    speed,
    hitMax,
    hitDice,
    profBonus,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    charNotes
) => {
    return (dispatch) => {
        dispatch({
            type: 'addChar',
            id: Math.random(),
            charName: charName,
            race: race,
            charClass: charClass,
            armorClass: armorClass,
            initiative: initiative,
            speed: speed,
            hitMax: hitMax,
            hitDice: hitDice,
            profBonus: profBonus,
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            charNotes: charNotes
        })
    }
}

export const deleteChar = (target) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteSession',
            payload: target
        })
    }
}