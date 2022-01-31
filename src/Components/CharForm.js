import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

export default function CharForm({ handleToggleForm }) {

    const defaultFormData = {
        charName: '',
        charLevel: '',
        charRace: '',
        charClass: '',
        charAc: '',
        charInit: '',
        charSpeed: '',
        charHp: '',
        charHit: '',
        charProf: '',
        charStr: '',
        charDex: '',
        charCon: '',
        charInt: '',
        charWis: '',
        charCha: ''
    }

    const [formData, updateFormData] = useState(defaultFormData);

    const handleInputChange = (e) => {
        /* Compare input name to key name, update specfic value */
        for (const key in formData) {
            if (e.target.name === key) {
                updateFormData({ ...formData, [key]: e.target.value });
                break;
            }
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addChar(formData);
        handleToggleForm();
        updateFormData(defaultFormData);
    }

    const dispatch = useDispatch();

    const { addChar } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='CharForm'>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className='textInputContainer'>
                    <div className='containerLeft'>

                    </div>
                    <div className='containerRight'>

                    </div>
                    <div className='charInfo'>
                        <label htmlFor="charName">Name</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charName' required />
                        <label htmlFor="charLevel">Level</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charLevel' required />
                        <label htmlFor="charRace">Race</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charRace' />
                        <label htmlFor="charClass">Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charClass' required />
                    </div>
                    <div className='charMisc'>
                        <label htmlFor="charAc">Armor Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charAc' required />
                        <label htmlFor="charInit">Initiative</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charInit' required />
                        <label htmlFor="charSpeed">Speed</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charSpeed' required />
                        <label htmlFor="charProf">Proficency Bonus</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charProf' required />
                    </div>
                    <div className='charHealth'>
                        <label htmlFor="charHp">Max Hit Points</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charHp' required />
                        <label htmlFor="charHit">Hit Dice</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charHit' required />
                    </div>
                    <div className='charStats'>
                        <label htmlFor="charStr">Strength</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charStr' required />
                        <label htmlFor="charDex">Dexterity</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charDex' required />
                        <label htmlFor="charCon">Constitution</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charCon' required />
                        <label htmlFor="charInt">Intelligence</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charInt' required />
                        <label htmlFor="charWis">Wisdom</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charWis' required />
                        <label htmlFor="charCha">Charisma</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charCha' required />
                    </div>
                    <input type="submit" />
                    <button onClick={() => handleToggleForm()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
