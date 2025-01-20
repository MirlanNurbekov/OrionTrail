import React from 'react';
import '../styles/Error.css';

export default function Error({ onBack }) {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <button onClick={onBack} className="back-button">
                Go Back
            </button>
        </div>
    );
}
