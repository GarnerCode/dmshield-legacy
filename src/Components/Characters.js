import React, { useState } from 'react';
import CharForm from './CharForm';
import PCList from './PCList';
import NPCList from './NPCList';

export default function Characters() {

    const [toggleForm, setToggleForm] = useState(false);

    const handleToggleForm = () => {
        setToggleForm(!toggleForm);
    }

    return (
        <div className='Characters'>
            {toggleForm ? <CharForm handleToggleForm={handleToggleForm} /> : <button onClick={handleToggleForm}>+</button>}
            <h1>Player Characters</h1>
            <PCList />
            <hr />
            <h1>Non-Player Characters</h1>
            <NPCList />
        </div>
    )
}
