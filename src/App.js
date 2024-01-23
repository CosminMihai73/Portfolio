import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Fishstore from './components/fishstore';
import Notes from "./components/notes";
import Mp3Player from "./components/Mp3Player";
import IPFromURL from "./components/ip";
import Scripts from "./components/Scripts";
import Weather from "./components/weather";


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/fishstore" element={<Fishstore />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/Mp3Player" element={<Mp3Player />} />
                    <Route path="/ip" element={<IPFromURL />} />
                    <Route path="/Scripts" element={<Scripts />} />
                    <Route path="/weather" element={<Weather />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;

