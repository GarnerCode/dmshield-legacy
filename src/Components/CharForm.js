import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';

export default function CharForm({ handleToggleForm }) {

    const [formData, updateFormData] = useState({
        name: '',
        race: '',
        class: '',
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
    });

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
    }

    const characters = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    const { addChar, deleteChar } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='CharForm'>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className='radioContainer'>
                    <div className='radioBlock'>
                        <label htmlFor="pc">PC</label>
                        <input type="radio" name='charType' value='pc' />
                    </div>
                    <div className='radioBlock'>
                        <label htmlFor="npc">NPC</label>
                        <input type="radio" name='charType' value='npc' />
                    </div>
                </div>
                <div className='textInputContainer'>
                    <div className='containerLeft'>

                    </div>
                    <div className='containerRight'>

                    </div>
                    <div className='charInfo'>
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='name' />
                        <label htmlFor="race">Race</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='race' />
                        <label htmlFor="class">Class</label>
                        <input onChange={(e) => handleInputChange(e)} type="text" name='class' />
                    </div>
                    <div className='charMisc'>
                        <label htmlFor="armorClass">Armor Class</label>
                        <input type="number" name='armorClass' />
                        <label htmlFor="initiative">Initiative</label>
                        <input type="number" name='initiative' />
                        <label htmlFor="speed">Speed</label>
                        <input type="number" name='speed' />
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
