import React from 'react';

export default function LanguageSelector({ onSelectLanguage }) {
    return (
        <div>
            <h1>Select Language</h1>
            <button onClick={() => onSelectLanguage('Python')}>Python</button>
            <button onClick={() => onSelectLanguage('JavaScript')}>JavaScript</button>
        </div>
    );
}
