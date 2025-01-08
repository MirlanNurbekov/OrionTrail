import React, { useState } from 'react';
import '../styles/QuestionPage.css';
import { PythonQuestions } from './PythonQuestions';
import { PythonAnswers } from './PythonAnswers';
import { JavaScriptQuestions } from './JavaScriptQuestions';
import { JavaScriptAnswers } from './JavaScriptAnswers';

export default function QuestionPage({ language }) {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [showSolution, setShowSolution] = useState(false);

    const questions = language === 'Python' ? PythonQuestions : JavaScriptQuestions;
    const answers = language === 'Python' ? PythonAnswers : JavaScriptAnswers;

    return (
        <div className="question-page">
            <h1>{language} Questions</h1>
            <ul className="question-list">
                {questions.map((question) => (
                    <li key={question.id} className="question-item">
                        <div
                            className="question-header"
                            onClick={() =>
                                setSelectedQuestion(
                                    selectedQuestion === question.id ? null : question.id
                                )
                            }
                        >
                            Question {question.id}
                        </div>
                        {selectedQuestion === question.id && (
                            <div className="question-content">
                                <p>{question.description}</p>
                                <button
                                    onClick={() => setShowSolution(!showSolution)}
                                    className="show-solution-btn"
                                >
                                    {showSolution ? 'HIDE SOLUTION' : 'SHOW SOLUTION'}
                                </button>
                                {showSolution && (
                                    <pre className="solution">{answers.find((ans) => ans.id === question.id)?.solution}</pre>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
