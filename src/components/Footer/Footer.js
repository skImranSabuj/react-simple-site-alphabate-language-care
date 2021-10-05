import React from 'react';
import fbLogo from '../../images/fb.png';
import gmailLogo from '../../images/gmail.png';
import linkedInLogo from '../../images/linkedIn.jpg';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white text-center p-3">
            <div className="icons">
                <img src={fbLogo} alt="" />
                <img src={gmailLogo} alt="" />
                <img src={linkedInLogo} alt="" />
            </div>
            <h5>Copyright © 2021  Alphabat language care</h5>
            <p>Powered by: Sk Imran Sabuj</p>
        </div>
    );
};

export default Footer;