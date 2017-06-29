import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" 
                type="button" data-toggle="collapse" 
                data-target="#navigation" 
                aria-controls="navigation" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/home">Navbar</Link>
            <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sms">SMS</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
