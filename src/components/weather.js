import React from 'react';
import './fishstore.css'

function Weather() {
    return (
        <div className="fish-store-container">
            <h2>Weather App</h2>
            <p>
                A weather app made with Python
            </p>

            <h3>Features</h3>
            <ol>
                <li>
                    <strong>Interface</strong>
                    <p>
                        You need to insert the name of the city, then select Celsius or Fahrenheit, and press 'Get Weather'
                        <img src={process.env.PUBLIC_URL +"/weather.png"} alt="Store" />
                    </p>
                </li>

            </ol>
        </div>
    );
}

export default  Weather;
