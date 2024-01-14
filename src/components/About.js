import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="profile-section">
                <div className="profile-text">
                    <h2>Cosmin Mihai</h2>
                    <p>Student | Developer | Tech Enthusiast</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/portret.png'} alt="Cosmin Mihai" className="profile-image" />

            </div>

            <h3>About me</h3>
            <p>
                I'm a passionate third-year student pursuing a degree in Informatics for Economics at Transilvania University in Brasov, Romania. My educational journey has equipped me with a strong basis in various aspects of computer technology and information technology.
            </p>
            <p>
                I specialize in full-stack development and enjoy the creative process of bringing thoughts to life through code. My skill set includes proficiency in several programming languages, such as React, PHP, HTML, JavaScript, Python, Java and C#.
            </p>
            <p>
                Additionally, I have hands-on experience working with databases, leveraging technologies like SQL Server and MySQL to design and manage records. Throughout my educational and personal projects, I've developed and maintained robust databases to support dynamic web applications.
            </p>

            <h3>Hobbies</h3>
            <p>
                In my free time, I enjoy exploring nature, reading, and indulging in the thrill of snowboarding.
            </p>


        </div>
    );
}

export default About;
