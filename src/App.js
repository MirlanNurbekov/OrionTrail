import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import LanguageSelector from "./components/LanguageSelector";
import QuestionPage from "./components/QuestionPage";
import JSQuestionPage from "./components/JSQuestionPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedLanguage("");
  };

  const handleBackToLanguages = () => {
    setSelectedLanguage("");
  };

  // Prevent F12 and right-click
  useEffect(() => {
    const disableDevTools = (e) => {
      if (
        e.key === "F12" || // F12 key
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) || // Ctrl+Shift+I/C/J
        (e.ctrlKey && e.key === "U") // Ctrl+U to view source
      ) {
        e.preventDefault();
        alert("Developer tools are disabled.");
      }
    };

    const disableContextMenu = (e) => {
      e.preventDefault();
      alert("Right-click is disabled.");
    };

    document.addEventListener("keydown", disableDevTools);
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("keydown", disableDevTools);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  if (!selectedLanguage) {
    return (
      <LanguageSelector
        onSelectLanguage={(language) => setSelectedLanguage(language)}
      />
    );
  }

  if (selectedLanguage === "JavaScript") {
    return (
      <JSQuestionPage
        language="JavaScript"
        onBackToLanguages={handleBackToLanguages}
      />
    );
  }

  return (
    <QuestionPage
      language="Python"
      onBackToLanguages={handleBackToLanguages}
    />
  );
}
