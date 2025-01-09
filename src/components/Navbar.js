import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ levels, selectedLevel, onSelectLevel, onBack }) {
    return (
        <nav className="navbar">
            <button className="back-button" onClick={onBack}>
                Back to Languages
            </button>
            {levels.map((level) => (
                <button
                    key={level}
                    className={`nav-button ${selectedLevel === level ? 'active' : ''}`}
                    onClick={() => onSelectLevel(level)}
                >
                    Level {level}
                </button>
            ))}
        </nav>
    );
}
