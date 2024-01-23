import React from 'react';
import './fishstore.css'

function Mp3Player() {
    return (
        <div className="fish-store-container">
            <h2>Mp3 Player</h2>
            <p>
               An Mp3 Player made with python
            </p>

            <h3>Features</h3>
            <ol>
                <li>
                    <strong>Interface</strong>
                    <p>
                        You can stop music, play music, and select a directory to load.
                        <img src={process.env.PUBLIC_URL +"/mp3.png"} alt="Store" />
                    </p>
                </li>

                <li>
                    <strong>Code</strong>
                    <p>

                        <img src={process.env.PUBLIC_URL +"/mp31.png"} alt="Store" />
                        <img src={process.env.PUBLIC_URL +"/mp32.png"} alt="Store" />
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default Mp3Player;
