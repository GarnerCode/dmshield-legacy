import React, { useState } from 'react';
import CharForm from './CharForm';
import CharList from './CharList';

export default function Characters() {

    const [toggleForm, setToggleForm] = useState(false);

    const handleToggleForm = () => {
        setToggleForm(!toggleForm);
    }

    return (
        <div className='Characters'>
            {toggleForm ? <CharForm handleToggleForm={handleToggleForm} /> : <button className='addChar' onClick={handleToggleForm}>+</button>}
            <h1>Characters</h1>
            <hr />
            <CharList />
        </div>
    )
}
