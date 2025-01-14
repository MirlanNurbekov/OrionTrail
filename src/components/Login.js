import React, { useState } from "react";
import "../styles/Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "student" && password === "supassword") {
      onLogin();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const generateRandomPosition = () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  });

  return (
    <div className="login-page">
      <div className="moving-elements">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="circle"
            style={generateRandomPosition()}
          ></div>
        ))}
      </div>
      <div className="input-wrapper">
        <form>
          <img src="/Pictures/su_logo.png" alt="Logo" className="logo" />
          <div className="input-container">
            <input
              type="text"
              name="username"
              className="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="send" onClick={handleLogin}>
              Login
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
