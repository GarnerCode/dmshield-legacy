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
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charName' />
                        <label htmlFor="race">Race</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='race' />
                        <label htmlFor="charClass">Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='charClass' />
                    </div>
                    <div className='charMisc'>
                        <label htmlFor="armorClass">Armor Class</label>
                        <input type="number" name='armorClass' />
                        <label htmlFor="initiative">Initiative</label>
                        <input type="number" name='initiative' />
                        <label htmlFor="speed">Speed</label>
                        <input type="number" name='speed' />
                        <label htmlFor="profBonus">Proficency Bonus</label>
                        <input type="number" name='profBonus' />
                    </div>
                    <div className='charHealth'>
                        <label htmlFor="hitMax">Max Hit Points</label>
                        <input type="number" name='hitMax' />
                        <label htmlFor="hitDice">Hit Dice</label>
                        <input type="text" name='hitDice' />
                    </div>
                    <div className='charStats'>
                        <label htmlFor="strength">Strength</label>
                        <input type="number" name='strength' />
                        <label htmlFor="dexterity">Dexterity</label>
                        <input type="number" name='dexterity' />
                        <label htmlFor="constitution">Constitution</label>
                        <input type="number" name='constitution' />
                        <label htmlFor="intelligence">Intelligence</label>
                        <input type="number" name='intelligence' />
                        <label htmlFor="wisdom">Wisdom</label>
                        <input type="number" name='wisdom' />
                        <label htmlFor="charisma">Charisma</label>
                        <input type="number" name='charisma' />
                    </div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
