import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';
import CharEntry from './CharEntry';

export default function CharList() {

    const characters = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    const { deleteChar } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="CharList">
            {characters.map(character => {
                return (
                    <CharEntry
                        charName={character.charName}
                        key={character.charId}
                        charId={character.charId}
                        charLevel={character.charLevel}
                        charRace={character.charRace}
                        charClass={character.charClass}
                        charAc={character.charAc}
                        charInit={character.charInit}
                        charSpeed={character.charSpeed}
                        charHp={character.charHp}
                        charHit={character.charHit}
                        charProf={character.charProf}
                        charStr={character.charStr}
                        charDex={character.charDex}
                        charCon={character.charCon}
                        charInt={character.charInt}
                        charWis={character.charWis}
                        charCha={character.charCha}
                        deleteChar={deleteChar}
                    />
                )
            })}
        </div>
    )
}
