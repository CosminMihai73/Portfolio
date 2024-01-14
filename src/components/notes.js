import React from 'react';
import './fishstore.css';

function Notes() {
    return (
        <div className="fish-store-container">
            <h2>Notes Application</h2>
            <p>
                A web-based note-taking application developed from scratch using HTML, PHP, CSS, and JavaScript.
                The system includes a MySQL database for user authentication and note management.
                Users can create accounts, log in, and write and manage their notes seamlessly.
            </p>

            <h3>Features</h3>
            <ul>
                <li>
                    <strong>User Authentication:</strong>
                    <p>
                        Enables user registration and login functionality.
                        Implements secure password storage using hashing techniques.
                        Provides access control to restrict certain features to authenticated users.
                        <img src={process.env.PUBLIC_URL +"/PROJECT2.png"} alt="Store" />
                    </p>
                </li>
                <li>
                    <strong>Manage Notes:</strong>
                    <p>
                        Allows users to add, remove, or mark tasks as complete.
                        <img src={process.env.PUBLIC_URL +"/notite.png"} alt="Store" />
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Notes;
