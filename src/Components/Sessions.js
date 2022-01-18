import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';
import SessionEntry from './SessionEntry';

export default function Sessions() {

    const [toggleAddSession, setToggleAddSession] = useState(false);
    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');

    const handleToggle = () => {
        setToggleAddSession(!toggleAddSession);
    }

    const handleTitleInput = (e) => {
        setTitleInput(e.target.value);
    }
    const handleTextInput = (e) => {
        setTextInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleInput.replace(/\s+/g, '') === '' || textInput.replace(/\s+/g, '') === '') {
            return;
        }
        handleToggle();
        addSession(titleInput, textInput);
        setTitleInput('');
        setTextInput('');
    }

    const sessions = useSelector((state) => state.sessions);
    const dispatch = useDispatch();

    const { addSession, deleteSession } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='Sessions'>
        <h1>Session Logs</h1>
            {toggleAddSession ? 
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className='inputTitle' onChange={(e) => handleTitleInput(e)} value={titleInput} type="text" />
                    <textarea onChange={(e) => handleTextInput(e)} value={textInput} id="" cols="50" rows="10"></textarea>
                    <input className='submit' type="submit" />
                    <button onClick={handleToggle}>Cancel</button>
                </form>
                :
                <button className='addSession' onClick={handleToggle}><i className="fas fa-plus"></i></button>
            }
            {sessions.map(session => {
                return (
                    <SessionEntry 
                        title={session.title}
                        text={session.text}
                        deleteSession={deleteSession}
                        id={session.id}
                    />
                )
            })}
        </div>
    )
}
