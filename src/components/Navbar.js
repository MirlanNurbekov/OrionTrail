import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ levels, selectedLevel, onSelectLevel, onBack, points }) {
  const pointsToUnlock = 200;
  const pointsNeeded = Math.max(pointsToUnlock - points, 0);

  return (
    <div className="navbar">
      <button className="back-button" onClick={onBack}>
        Back to Languages
      </button>
      <div className="level-buttons">
        {levels.map((level) => (
          <button
            key={level}
            className={`level-button ${level === selectedLevel ? "selected" : ""}`}
            onClick={() => {
              if (level === 4 && points < pointsToUnlock) return;
              onSelectLevel(level);
            }}
            disabled={level === 4 && points < pointsToUnlock}
          >
            Level {level}
          </button>
        ))}
      </div>
      <div className="points-display">
        <p>{points}/{pointsToUnlock} points to unlock Level 4</p>
      </div>
    </div>
  );
}
