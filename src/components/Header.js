import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Click outside the dropdown, close it
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropbtn" onClick={toggleDropdown}>
                    Contact <i className="fa fa-caret-down"></i>
                </button>
                <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                    <a href="mailto:cosminmihaidaia@gmail.com">Email</a>
                    <a href="https://github.com/CosminMihai73">GitHub</a>
                    <a href="https://www.linkedin.com/in/cosmin-mihai-daia-421630278/">LinkedIn</a>
                    <a href="https://discord.com/channels/cosmin4629">Discord</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
