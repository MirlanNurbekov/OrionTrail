import React from 'react';
import '../styles/LanguageSelector.css';

export default function LanguageSelector({ onSelectLanguage }) {
    return (
        <div className="language-selector">
            <div className="logo-container">
                <img src="/Pictures/su_logo.png" alt="Logo" className="rotating-logo" />
            </div>
            <h1>Select Language</h1>
            <div className="language-buttons">
                <button onClick={() => onSelectLanguage('Python')}>Python</button>
                <button onClick={() => onSelectLanguage('JavaScript')}>JavaScript</button>
            </div>
        </div>
    );
}
