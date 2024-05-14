import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCoffee, faDroplet, faDumbbell, faFireFlameCurved, faHeartPulse, faMoon, faShoePrints, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='n-main'>

            <div className='n-full'>

                <Link to="/"><FontAwesomeIcon className='n-icon' icon={faFireFlameCurved} /></Link>

                <Link to="/page2"><FontAwesomeIcon className='n-icon' icon={faDumbbell} /></Link>

                <Link to="/page3"><FontAwesomeIcon className='n-icon' icon={faDumbbell} /></Link>

                <Link to="/page4"><FontAwesomeIcon className='n-icon' icon={faDumbbell} /></Link>

            </div>
        </div>
    );
};

export default Navbar;
