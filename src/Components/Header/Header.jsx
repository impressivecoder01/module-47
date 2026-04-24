// import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <NavLink to={'/'}>Header</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </nav>
    );
};

export default Header;