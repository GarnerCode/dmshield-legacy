import React from 'react'

export default function SessionEntry({ title, text, deleteSession, id }) {
    return (
        <div className='SessionEntry'>
            <button onClick={() => deleteSession(id)}><i class="fas fa-trash"></i></button>
            <h1>{title}</h1>
            <hr />
            <p>{text}</p>
        </div>
    )
}
