import React from 'react';
import './fishstore.css'

function IPFromURL() {
    return (
        <div className="fish-store-container">
            <h2>Get Location from a URL</h2>
            <p>
                With this script, you can determine the location of a URL
            </p>


            <ol>
                <li>

                    <p>
                        Insert a URL and then press enter
                        <img src={process.env.PUBLIC_URL +"/ip.png"} alt="Store" />
                    </p>
                </li>

                <li>
                    <strong>Code</strong>
                    <p>

                        <img src={process.env.PUBLIC_URL +"/ip2.png"} alt="Store" />

                    </p>
                </li>
            </ol>
        </div>
    );
}

export default IPFromURL;
