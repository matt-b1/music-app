import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export const Header = () => {
    return (
        <div>
            <h1>Music App</h1>
            <div className='nav'>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="artists" end>
                    Artists
                </NavLink>
            </div>
        </div>
    )
}

export default Header;
