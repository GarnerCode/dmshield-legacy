import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

export default function CharEntry(props) {

    const dispatch = useDispatch();

    const { editChar } = bindActionCreators(actionCreators, dispatch);

    /*Establish local object state to utilize for-in loop to edit values*/

    /*!!!Local values need to be passed back into store to establish consistency between route changes!!!*/

    const [charData, setCharData] = useState({
        'charName': props.charName,
        'charLevel': props.charLevel,
        'charRace': props.charRace,
        'charClass': props.charClass,
        'charAc': props.charAc,
        'charInit': props.charInit,
        'charSpeed': props.charSpeed,
        'charHp': props.charHp,
        'charHit': props.charHit,
        'charProf': props.charProf,
        'charStr': props.charStr,
        'charDex': props.charDex,
        'charCon': props.charCon,
        'charInt': props.charInt,
        'charWis': props.charWis,
        'charCha': props.charCha
    });
    const handleInputChange = (e) => {
        for (const key in charData) {
            if (e.target.name === key) {
                setCharData({ ...charData, [key]: e.target.value });
                break;
            }
        }
    }

    const handleSubmit = () => {
        editChar(charData, props.charId);
        handleToggle();
    }

    const [toggleEdit, setToggleEdit] = useState(false);
    const handleToggle = () => {
        setToggleEdit(!toggleEdit);
    }

    return <div className="CharEntry">
        {toggleEdit ?
            <form className='formCharEdit'>
                <label htmlFor="charName">Name</label>
                <input onChange={(e) => handleInputChange(e)} name='charName' value={charData.charName} type="text" />
                <label htmlFor="charLevel">Level</label>
                <input onChange={(e) => handleInputChange(e)} name='charLevel' value={charData.charLevel} type="number" />
                <label htmlFor="charRace">Race</label>
                <input onChange={(e) => handleInputChange(e)} name='charRace' value={charData.charRace} type="text" />
                <label htmlFor="charClass">Class</label>
                <input onChange={(e) => handleInputChange(e)} name='charClass' value={charData.charClass} type="text" />

                <label htmlFor="charAc">Armor Class</label>
                <input onChange={(e) => handleInputChange(e)} name='charAc' value={charData.charAc} type="number" />
                <label htmlFor="charInitiative">Initiative</label>
                <input onChange={(e) => handleInputChange(e)} name='charInit' value={charData.charInit} type="number" />
                <label htmlFor="charSpeed">Speed</label>
                <input onChange={(e) => handleInputChange(e)} name='charSpeed' value={charData.charSpeed} type="number" />

                <label htmlFor="charHp">Max HP</label>
                <input onChange={(e) => handleInputChange(e)} name='charHp' value={charData.charHp} type="number" />
                <label htmlFor="charHit">Hit Dice</label>
                <input onChange={(e) => handleInputChange(e)} name='charHit' value={charData.charHit} type="text" />
                <label htmlFor="charProf">Proficiency Bonus</label>
                <input onChange={(e) => handleInputChange(e)} name='charProf' value={charData.charProf} type="number" />

                <label htmlFor="charStr">Strength</label>
                <input onChange={(e) => handleInputChange(e)} name='charStr' value={charData.charStr} type="number" />
                <label htmlFor="charDex">Dexterity</label>
                <input onChange={(e) => handleInputChange(e)} name='charDex' value={charData.charDex} type="number" />
                <label htmlFor="charCon">Constitution</label>
                <input onChange={(e) => handleInputChange(e)} name='charCon' value={charData.charCon} type="number" />

                <label htmlFor="charInt">Intelligence</label>
                <input onChange={(e) => handleInputChange(e)} name='charInt' value={charData.charInt} type="number" />
                <label htmlFor="charWis">Wisdom</label>
                <input onChange={(e) => handleInputChange(e)} name='charWis' value={charData.charWis} type="number" />
                <label htmlFor="charCha">Charisma</label>
                <input onChange={(e) => handleInputChange(e)} name='charCha' value={charData.charCha} type="number" />
                <button onClick={() => handleSubmit()}><i className="fas fa-check"></i></button>
            </form>
            :
            <div className='charData'>
                <header>
                    <h1>{charData.charName}</h1>
                    <h2>Level {charData.charLevel} {charData.charRace} {charData.charClass}</h2>
                </header>
                <section className="charMisc">
                    <p><i className="fas fa-shield-alt"></i> AC: {charData.charAc}</p>
                    <p><i className="fas fa-list"></i> Initiative: {charData.charInit}</p>
                    <p><i className="fas fa-running"></i> Speed: {charData.charSpeed}</p>
                </section>
                <section className="charHealth">
                    <p><i className="fas fa-heart"></i> Max HP: {charData.charHp}</p>
                    <p><i className="fas fa-heart-broken"></i> Hit Dice: {charData.charHit}</p>
                    <p><i className="fas fa-lightbulb"></i> Proficency Bonus: {charData.charProf}</p>
                </section>
                <section className="charStatBlock">
                    <p><i className="fas fa-dumbbell"></i> STR: {charData.charStr}</p>
                    <p><i className="fas fa-balance-scale"></i> DEX: {charData.charDex}</p>
                    <p><i className="fas fa-heartbeat"></i> CON: {charData.charCon}</p>
                </section>
                <section className="charStatBlock">
                    <p><i className="fas fa-book"></i> INT: {charData.charInt}</p>
                    <p><i className="fas fa-scroll"></i> WIS: {charData.charWis}</p>
                    <p><i className="fas fa-handshake"></i> CHA: {charData.charCha}</p>
                </section>
                <footer>
                    <button onClick={() => handleToggle()}><i className="fas fa-edit"></i></button>
                    <button onClick={() => props.deleteChar(props.charId)}><i className="fas fa-trash"></i></button>
                </footer>
            </div>
        }
    </div>;
}
