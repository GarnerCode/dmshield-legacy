import React from 'react';
import { useSelector } from 'react-redux';
import CharEntry from './CharEntry';

export default function CharList() {

    const characters = useSelector((state) => state.characters);

    return (
        <div>
            {characters.map(character => {
                return (
                    <CharEntry
                        charName={character.charName}
                        key={character.id}
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
                    />
                )
            })}
        </div>
    )
}
