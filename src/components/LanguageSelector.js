import React from 'react';
import '../styles/LanguageSelector.css';

export default function LanguageSelector({ onSelectLanguage }) {
    return (
        <div className="language-selector">
            <h1>Select Language</h1>
            <div className="language-buttons">
                <button onClick={() => onSelectLanguage('Python')}>Python</button>
                <button onClick={() => onSelectLanguage('JavaScript')}>JavaScript</button>
            </div>
        </div>
    );
}
