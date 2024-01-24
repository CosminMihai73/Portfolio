import React from 'react';
import './fishstore.css'

function Weather() {
    return (
        <div className="fish-store-container">
            <h2>Weather App</h2>
            <p>
                The Weather App is a simple desktop application developed with Python. It provides users with real-time weather information for a specified city. Users can input the city name, choose between Celsius and Fahrenheit temperature units, and retrieve weather details by clicking the 'Get Weather' button.
            </p>

            <h3>Features</h3>
            <ol>
                <li>
                    <strong>City Input:</strong>
                    <p>
                         Users can input the name of the city they want to check the weather for.
                         The application prompts users to select temperature units (Celsius or Fahrenheit).
                    </p>
                </li>

                <li>
                    <strong>Get Weather Button:</strong>
                    <p>
                         Clicking the 'Get Weather' button triggers an API request to fetch real-time weather information for the specified city and temperature unit.

                    </p>
                </li>

                <li>
                    <strong>Weather Information Display:</strong>
                    <p>
                         The weather conditions, temperature, wind speed, and humidity are displayed on the application's interface.
                    </p>
                </li>
            </ol>
            <div className="password-images">

                <img src={process.env.PUBLIC_URL + "/weather.png"} alt="weather" className="weather" />
            </div>
        </div>
    );
}

export default  Weather;
