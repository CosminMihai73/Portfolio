import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
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
                <Link to="/notes" className="project-details">
                    <h3>Notes Application</h3>
                    <p>A notes application made with PHP/HTML/CSS</p>
                </Link>
                <Link to="/notes">
                    <img src={process.env.PUBLIC_URL +"/PROJECT2.png"} alt="Project 1" />
                </Link>
            </div>
        </div>
    );
}

export default Projects;
