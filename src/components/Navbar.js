import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ levels, selectedLevel, onSelectLevel, onBack, points }) {
    return (
        <nav className="navbar">
            <button className="back-button" onClick={onBack}>
                Back to Languages
            </button>
            {levels.map((level) => (
                <button
                    key={level}
                    className={`nav-button ${selectedLevel === level ? 'active' : ''} ${
                        level === 4 && points < 200 ? 'disabled' : ''
                    }`}
                    onClick={() => onSelectLevel(level)}
                    disabled={level === 4 && points < 200}
                >
                    Level {level}
                </button>
            ))}
        </nav>
    );
}
