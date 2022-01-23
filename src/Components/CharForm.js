import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

export default function CharForm({ handleToggleForm }) {

    const defaultFormData = {
        charName: '',
        race: '',
        charClass: '',
        armorClass: '',
        initiative: '',
        speed: '',
        hitMax: '',
        hitDice: '',
        profBonus: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        charNotes: ''
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

    const { addChar, deleteChar } = bindActionCreators(actionCreators, dispatch);

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
                        <label htmlFor="race">Race</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='race' />
                        <label htmlFor="charClass">Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charClass' required />
                    </div>
                    <div className='charMisc'>
                        <label htmlFor="armorClass">Armor Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='armorClass' required />
                        <label htmlFor="initiative">Initiative</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='initiative' required />
                        <label htmlFor="speed">Speed</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='speed' required />
                        <label htmlFor="profBonus">Proficency Bonus</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='profBonus' required />
                    </div>
                    <div className='charHealth'>
                        <label htmlFor="hitMax">Max Hit Points</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='hitMax' required />
                        <label htmlFor="hitDice">Hit Dice</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='hitDice' required />
                    </div>
                    <div className='charStats'>
                        <label htmlFor="strength">Strength</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='strength' required />
                        <label htmlFor="dexterity">Dexterity</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='dexterity' required />
                        <label htmlFor="constitution">Constitution</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='constitution' required />
                        <label htmlFor="intelligence">Intelligence</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='intelligence' required />
                        <label htmlFor="wisdom">Wisdom</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='wisdom' required />
                        <label htmlFor="charisma">Charisma</label>
                        <input onChange={(e) => handleInputChange(e)} type="number" name='charisma' required />
                    </div>
                    <input type="submit" />
                    <button onClick={() => handleToggleForm()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
