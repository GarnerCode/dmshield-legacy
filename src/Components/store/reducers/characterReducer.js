const reducer = (state = [], action) => {
    switch (action.type) {
        case 'addChar':
            return [
                ...state,
                {
                    id: action.id,
                    charName: action.charName,
                    race: action.race,
                    charClass: action.charClass,
                    armorClass: action.armorClass,
                    initiative: action.initiative,
                    speed: action.speed,
                    hitMax: action.hitMax,
                    hitDice: action.hitDice,
                    profBonus: action.profBonus,
                    strength: action.strength,
                    dexterity: action.dexterity,
                    constitution: action.constitution,
                    intelligence: action.intelligence,
                    wisdom: action.wisdom,
                    charisma: action.charisma,
                    charNotes: action.charNotes
                }
            ]
        case 'deleteChar':
            if (window.confirm("Delete character?") == true) {
                return state.filter(character => character.id !== action.payload);
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default reducer;