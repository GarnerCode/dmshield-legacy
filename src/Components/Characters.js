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
            <h1>Characters</h1>
            {toggleForm ? <CharForm handleToggleForm={handleToggleForm} /> : <button className='addChar' onClick={handleToggleForm}><i className="fas fa-plus"></i></button>}
            <CharList />
        </div>
    )
}
