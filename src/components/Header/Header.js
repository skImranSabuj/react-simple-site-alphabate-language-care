import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <img className="logo" src={logo} alt="" />
                <div className="title">
                    <h1>Alphabate Language Care</h1>
                </div>

            </div>
            <nav>
                <Link to="/home">Home</Link>
                <NavLink to="/course">Courses</NavLink>
                {/* <a href="/orders">Order Review</a> */}
                {/* <a href="/inventory">Manage Inventory</a> */}
                <NavLink to="/about">About Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;