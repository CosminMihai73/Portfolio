import React from 'react';
import './fishstore.css';

function Mp3Player() {
    return (
        <div className="fish-store-container">
            <h2>MP3 Player</h2>
            <p>
                The MP3 Player is a simple desktop application developed using React and Tkinter. This application allows users to play and stop MP3 music files from a selected folder. Users can load a music folder, view available songs, and control playback within the application.
            </p>

            <h3>Features</h3>
            <ol>
                <li>
                    <strong>Play Music:</strong>
                    <p>
                        - Select a song from the loaded list and press the "Play" button to start playback.
                        - The currently selected song in the listbox is played using the `pygame.mixer.music` module.
                    </p>
                </li>

                <li>
                    <strong>Stop Music:</strong>
                    <p>
                        - Press the "Stop" button to halt the playback of the currently playing song.
                    </p>
                </li>

                <li>
                    <strong>Load Music Folder:</strong>
                    <p>
                        - Click the "Load Music Folder" button to choose a directory containing MP3 files.
                        - The application will change the working directory to the selected folder and list all MP3 files in the listbox.
                    </p>
                </li>
            </ol>

            <div className="password-images">

                <img src={process.env.PUBLIC_URL + "/mp3.png"} alt="MP3 Player Interface" className="mp3" />
            </div>
        </div>
    );
}

export default Mp3Player;
