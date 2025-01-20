import React, { useState } from "react";
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
