import React from 'react';
import './fishstore.css';

function Password() {
    return (
        <div className="fish-store-container">
            <h2>Password Generator</h2>
            <p>
                The Password Generator is a desktop application created using Python and the Tkinter library for the graphical user interface. It provides a simple and secure way to generate, save, view, and manage passwords. Passwords are generated based on user preferences and can be saved with additional information such as username and notes. The application stores passwords in a text file for easy access.
            </p>

            <h3>Features</h3>

            <ol>
                <li>
                    <strong>Generate Password:</strong>
                    <p>
                        Users can generate passwords with specified criteria, including the option to include special characters.
                        Passwords are generated on a separate window with fields for name, username, and notes.
                    </p>
                </li>

                <li>
                    <strong>View Passwords:</strong>
                    <p>
                        Users can view saved passwords in a separate window.
                        Passwords are displayed with details such as name, username, password, and notes.
                        A search functionality allows users to find specific passwords based on keywords.
                    </p>
                </li>

                <li>
                    <strong>Save Password:</strong>
                    <p>
                        Generated passwords can be saved along with associated information such as name, username, and notes.
                        Saved passwords are stored in a text file ("passwords.txt").
                    </p>
                </li>

                <li>
                    <strong>Delete Password:</strong>
                    <p>
                        Users can delete passwords from the view window.
                        A confirmation dialog is provided to ensure secure deletion.
                    </p>
                </li>

                <li>
                    <strong>Copy Password:</strong>
                    <p>
                        Users can copy passwords to the clipboard for easy usage.
                        Copy functionality is available from the view window.

                    </p>

                        <div className="password-images-container">
                            <img src={process.env.PUBLIC_URL + "/pw1.png"} alt="Pw1" className="password-image1" />

                            <img src={process.env.PUBLIC_URL + "/pw2.png"} alt="Pw2" className="password-image2" />

                            <img src={process.env.PUBLIC_URL + "/pw3.png"} alt="Pw3" className="password-image3" />
                        </div>

                </li>

            </ol>

        </div>
    );
}

export default Password;
