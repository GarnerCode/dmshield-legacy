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
                        key={character.id}
                        id={character.id}
                        race={character.race}
                        charClass={character.charClass}
                        armorClass={character.armorClass}
                        initiative={character.initiative}
                        speed={character.speed}
                        hitMax={character.hitMax}
                        hitDice={character.hitDice}
                        profBonus={character.profBonus}
                        strength={character.strength}
                        dexterity={character.dexterity}
                        constitution={character.constitution}
                        intelligence={character.intelligence}
                        wisdom={character.wisdom}
                        charisma={character.charisma}
                        charNotes={character.charNotes}
                        charData={character}
                        deleteChar={deleteChar}
                    />
                )
            })}
        </div>
    )
}
