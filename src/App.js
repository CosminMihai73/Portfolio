import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Fishstore from './components/fishstore';
import Notes from "./components/notes";


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

                </Routes>
            </div>
        </Router>
    );
}

export default App;

