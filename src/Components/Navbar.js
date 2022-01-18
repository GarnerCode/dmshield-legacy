import React from 'react'
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar">
            <img src={logo} alt="" />
            <Link to='/'>
                <button>
                    <i className="fas fa-book"></i>
                </button>
            </Link>
            <Link to='/characters'>
                <button>
                    <i className="fas fa-users"></i>
                </button>
            </Link>
            <Link to='/encounters'>
                <button>
                    <i className="fas fa-skull"></i>
                </button>
            </Link>
        </div>
    )
}
