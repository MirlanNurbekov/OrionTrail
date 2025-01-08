import React, { useState, useEffect } from 'react';

export default function QuestionPage({ language }) {
    const [level, setLevel] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [solutionsVisible, setSolutionsVisible] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('/api/questions');
            const data = await response.json();
            setQuestions(data[language][level - 1]?.questions || []);
        };
        fetchQuestions();
    }, [language, level]);

    return (
        <div>
            <h1>{language} Questions - Level {level}</h1>
            <nav>
                {[1, 2, 3, 4].map((lvl) => (
                    <button key={lvl} onClick={() => setLevel(lvl)}>
                        Level {lvl}
                    </button>
                ))}
            </nav>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>
                        {q}
                        {solutionsVisible && <p>Solution: Solution for {q}</p>}
                    </li>
                ))}
            </ul>
            <button onClick={() => setSolutionsVisible(!solutionsVisible)}>
                {solutionsVisible ? 'Hide Solutions' : 'Show Solutions'}
            </button>
        </div>
    );
}
