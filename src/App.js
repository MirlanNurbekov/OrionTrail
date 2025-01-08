import React, { useState } from 'react';
import Login from './components/Login';
import LanguageSelector from './components/LanguageSelector';
import QuestionPage from './components/QuestionPage';
import './styles/App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [language, setLanguage] = useState('');

    if (!loggedIn) {
        return <Login onLogin={() => setLoggedIn(true)} />;
    }

    if (!language) {
        return <LanguageSelector onSelectLanguage={(lang) => setLanguage(lang)} />;
    }

    return <QuestionPage language={language} />;
}

export default App;
