import React from 'react';
import './fishstore.css';

function TicTacToe() {
    return (
        <div className="fish-store-container">
            <h2>Tic-Tac-Toe</h2>
            <p>
                Tic-Tac-Toe is a classic two-player game where players take turns marking spaces
                in a 3x3 grid. The goal is to get three of their symbols (X or O) in a row.
                This React component provides a simple graphical user interface (GUI) for playing Tic-Tac-Toe.
            </p>

            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Two-Player Game:</strong> Players take turns placing their symbols (X or O) on the board.
                </li>
                <li>
                    <strong>Graphical User Interface:</strong> Simple and intuitive interface for a smooth gaming experience.
                </li>
                <li>
                    <strong>Automatic Win Detection:</strong> The game automatically checks for a winner after each move.
                </li>
                <li>
                    <strong>Draw Detection:</strong> If the board is full and there is no winner, the game declares a draw.
                </li>
            </ul>

            <h3>How to Play</h3>
            <ol>
                <li>Players take turns clicking on an empty cell to place their symbol (X or O).</li>
                <li>The game automatically checks for a win or draw after each move.</li>
                <li>If there's a winner, a pop-up message displays the winner.</li>
                <li>If the game is a draw, a pop-up message declares a draw.</li>
                <li>Players can restart the game after it concludes.</li>
            </ol>
            <div className="password-images">
                <img src={process.env.PUBLIC_URL + "/tictactoe.png"} alt="TicTacToe" className="tictactoe" />
            </div>
        </div>
    );
}

export default TicTacToe;
