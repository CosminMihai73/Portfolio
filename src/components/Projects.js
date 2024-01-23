import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
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
                <Link to="/Mp3Player" className="project-details">
                    <h3>Mp3Player</h3>
                    <p>An Mp3Player made with Python</p>
                </Link>
                <Link to="/Mp3Player">
                    <img src={process.env.PUBLIC_URL +"/mp3.png"} alt="Project 1" />
                </Link>
            </div>
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

export default Projects;
