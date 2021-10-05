import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header pt-4">
            <div className="header-title pb-2">
                <img className="logo" src={logo} alt="" />
                <div className="title">
                    <h1>Alphabate Language Care</h1>
                </div>

            </div>
            <nav className="bg-dark">
                <Link to="/home">Home</Link>
                <NavLink to="/courses">Courses</NavLink>
                {/* <a href="/orders">Order Review</a> */}
                {/* <a href="/inventory">Manage Inventory</a> */}
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;