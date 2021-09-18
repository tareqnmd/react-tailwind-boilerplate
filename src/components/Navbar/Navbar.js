import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <div className="container mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
);

export default Navbar;
