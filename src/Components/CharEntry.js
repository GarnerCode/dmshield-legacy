import React from 'react';

export default function CharEntry(props) {

    return <div>
        <h1>{props.charName}</h1>
        <h2>{props.race} {props.charClass}</h2>
        <p>AC: {props.armorClass}</p>
        <p>Initiative: {props.initiative}</p>
        <p>Speed: {props.speed}</p>
        <p>Max HP: {props.hitMax}</p>
        <p>Hit Dice: {props.hitDice}</p>
        <p>Proficency Bonus: {props.profBonus}</p>
        <p>STR: {props.strength}</p>
        <p>DEX: {props.dexterity}</p>
        <p>CON: {props.constitution}</p>
        <p>INT: {props.intelligence}</p>
        <p>WIS: {props.wisdom}</p>
        <p>CHA: {props.charisma}</p>
    </div>;
}
