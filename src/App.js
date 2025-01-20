import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import LanguageSelector from './components/LanguageSelector';
import QuestionPage from './components/QuestionPage';
import Error from './components/Error';

function App() {
    // State to track if the user is logged in
    const [loggedIn, setLoggedIn] = useState(false);

    // State to track the selected language
    const [language, setLanguage] = useState('');

    // State to track if there’s an error (404-like scenario)
    const [hasError, setHasError] = useState(false);

    // Function to handle user logout
    const handleLogout = () => {
        setLoggedIn(false); // Reset login status
        setLanguage(''); // Reset selected language
    };

    // Prevent F12 (developer tools)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.key === 'F12') || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))) {
                e.preventDefault();
                alert('Developer tools are disabled for this application.');
            }
        };
        const handleContextMenu = (e) => e.preventDefault(); // Disable right-click

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    // Simulate a 404 error scenario for demonstration
    useEffect(() => {
        // Replace this logic with actual routing error handling in a real app
        if (!loggedIn && !language) {
            setHasError(false); // Reset error state when user navigates back
        }
    }, [loggedIn, language]);

    // If there’s an error, show the Error component
    if (hasError) {
        return <Error onBack={() => setHasError(false)} />;
    }

    // If the user is not logged in, show the Login component
    if (!loggedIn) {
        return <Login onLogin={() => setLoggedIn(true)} />;
    }

    // If no language is selected, show the LanguageSelector component
    if (!language) {
        return <LanguageSelector onSelectLanguage={(lang) => setLanguage(lang)} />;
    }

    // Once a language is selected, show the QuestionPage component
    return (
        <QuestionPage
            language={language}
            onBackToLanguages={() => setLanguage('')} // Callback to return to language selection
            onLogout={handleLogout} // Callback to handle logout
        />
    );
}

export default App;
