import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="project">
                <Link to="/scripts" className="project-details">
                    <h3>Scripts</h3>
                </Link>
                <Link to="/scripts">
                    <img src={process.env.PUBLIC_URL +"/script.jpeg"} alt="Project 1" />
                </Link>
            </div>
            <div className="project">
                <Link to="/notes" className="project-details">
                    <h3>Notes Application</h3>
                    <p>A notes application made with PHP/HTML/CSS/Js</p>
                </Link>
                <Link to="/notes">
                    <img src={process.env.PUBLIC_URL +"/PROJECT2.png"} alt="Project 1" />
                </Link>
            </div>
            <div className="project">
                <Link to="/fishstore" className="project-details">
                    <h3>Fishing Store</h3>
                    <p>An online fishing store made with PHP/HTML/CSS/Js</p>
                </Link>
                <Link to="/fishstore">
                    <img src={process.env.PUBLIC_URL +"/Fish.png"} alt="Project 1" />
                </Link>
            </div>
            <div className="project">
                <Link to="/password" className="project-details">
                    <h3>Password Generator</h3>
                    <p>An Password Generator made with Python</p>
                </Link>
                <Link to="/password">
                    <img src={process.env.PUBLIC_URL +"/password-logo.png"} alt="Project 1" />
                </Link>
            </div>
            <div className="project">
                <Link to="/Mp3Player" className="project-details">
                    <h3>Mp3Player</h3>
                    <p>An Mp3Player made with Python</p>
                </Link>
                <Link to="/Mp3Player">
                    <img src={process.env.PUBLIC_URL +"/mp3-logo.png"} alt="Project 1" />
                </Link>
            </div>
            <div className="project">
                <Link to="/weather" className="project-details">
                    <h3>Weather App</h3>
                    <p>A weather app made with Python</p>
                </Link>
                <Link to="/weather">
                    <img src={process.env.PUBLIC_URL +"/weather-logo.png"} alt="Project 1" />
                </Link>
            </div>
        </div>
    );
}

export default Projects;
