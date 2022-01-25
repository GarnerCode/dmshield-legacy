import { React, useState } from 'react';

export default function CharEntry(props) {

    const [toggleEdit, setToggleEdit] = useState(false);

    return <div className="CharEntry">
        <header>
            <h1>{props.charName}</h1>
            <h2>{props.race} {props.charClass}</h2>
        </header>
        <section className="charMisc">
            <p>AC: {props.armorClass}</p>
            <p>Initiative: {props.initiative}</p>
            <p>Speed: {props.speed}</p>
        </section>
        <section className="charHealth">
            <p>Max HP: {props.hitMax}</p>
            <p>Hit Dice: {props.hitDice}</p>
            <p>Proficency Bonus: {props.profBonus}</p>
        </section>
        <section className="charStatBlock">
            <p>STR: {props.strength}</p>
            <p>DEX: {props.dexterity}</p>
            <p>CON: {props.constitution}</p>
        </section>
        <section className="charStatBlock">
            <p>INT: {props.intelligence}</p>
            <p>WIS: {props.wisdom}</p>
            <p>CHA: {props.charisma}</p>
        </section>
        <footer>
            <button><i className="fas fa-edit"></i></button>
            <button onClick={() => props.deleteChar(props.id)}><i className="fas fa-trash"></i></button>
        </footer>
    </div>;
}
