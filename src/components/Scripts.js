import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Scripts() {
    return (
        <div className="projects-container">
            <h2>My Scripts</h2>

            <div className="project">
                <Link to="/ip" className="project-details">
                    <h3>Get Location from a URL</h3>
                    <p>With this script, you can determine the location of a URL</p>
                </Link>
                <Link to="/ip">
                    <img src={process.env.PUBLIC_URL +"/ip.png"} alt="Project 1" />
                </Link>
            </div>
        </div>
    );
}

export default Scripts;
