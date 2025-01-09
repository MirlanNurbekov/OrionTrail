import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../Pictures/su_logo.png';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'student' && password === 'supassword') {
            onLogin();
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="input-wrapper">
            <form>
                <img src={logo} alt="Logo" className="logo" />
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
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
