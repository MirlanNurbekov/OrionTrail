import React, { useState } from "react";
import "../styles/LanguageSelector.css";

export default function LanguageSelector({ onSelectLanguage }) {
  const [clickEffect, setClickEffect] = useState(false);

  const handleClick = () => {
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 1500); // Reset wave after animation
  };

  return (
    <div className={`language-selector ${clickEffect ? "wave" : ""}`}>
      <div className="logo-container">
        <img
          src="/Pictures/su_logo.png"
          alt="Logo"
          className="rotating-logo"
          onMouseEnter={(e) => e.target.classList.add("coin-flip")}
          onMouseLeave={(e) => e.target.classList.remove("coin-flip")}
          onClick={handleClick}
        />
      </div>
      <h1>Select Language</h1>
      <div className="language-buttons">
        <div
          className="language-icon"
          onClick={() => onSelectLanguage("Python")}
        >
          <img
            src="/Pictures/pythonlogo.png"
            alt="Python"
            className="language-image"
          />
        </div>
        <div
          className="language-icon"
          onClick={() => onSelectLanguage("JavaScript")}
        >
          <img
            src="/Pictures/jslogo.png"
            alt="JavaScript"
            className="language-image"
          />
        </div>
      </div>
    </div>
  );
}
