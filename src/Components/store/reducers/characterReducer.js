const reducer = (state = [], action) => {
    switch (action.type) {
        case 'addChar':
            return [
                ...state,
                {
                    charId: action.charId,
                    charName: action.charName,
                    charLevel: action.charLevel,
                    charRace: action.charRace,
                    charClass: action.charClass,
                    charAc: action.charAc,
                    charInit: action.charInit,
                    charSpeed: action.charSpeed,
                    charHp: action.charHp,
                    charHit: action.charHit,
                    charProf: action.charProf,
                    charStr: action.charStr,
                    charDex: action.charDex,
                    charCon: action.charCon,
                    charInt: action.charInt,
                    charWis: action.charWis,
                    charCha: action.charCha,
                }
            ]
        case 'deleteChar':
            if (window.confirm("Delete character?") === true) {
                return state.filter(character => character.charId !== action.payload);
            } else {
                return state;
            }
        case 'editChar':
            console.log('Number of characters: ' + state.length);
            const charCount = state.length;
            for (var i = 0; i < charCount; i++) {
                console.log(state[i]);
                if (state[i].charId === action.charId) {
                    state[i] = action.payload;
                    state[i].charId = Math.random();
                    return state;
                }
            }
        default:
            return state;
    }
}

export default reducer;