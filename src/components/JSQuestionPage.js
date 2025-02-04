import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { JavaScriptQuestionsLvl1 } from "../data/javascript/JavaScriptQuestionsLvl1";
import { JavaScriptAnswersLvl1 } from "../data/javascript/JavaScriptAnswersLvl1";
import "../styles/QuestionPage.css";

export default function JSQuestionPage({ language = "JavaScript", onBackToLanguages }) {
  const levels = [1];
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [points, setPoints] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const questionsMap = {
    JavaScript: [JavaScriptQuestionsLvl1],
  };

  const answersMap = {
    JavaScript: [JavaScriptAnswersLvl1],
  };

  const questions = questionsMap?.[language]?.[selectedLevel - 1] || [];
  const solutions = answersMap?.[language]?.[selectedLevel - 1] || [];

  useEffect(() => {
    const initialAnsweredQuestions = {};
    levels.forEach((level) => {
      initialAnsweredQuestions[level] = {};
    });
    setAnsweredQuestions(initialAnsweredQuestions);
  }, [levels]);

  const normalizeCode = (code) =>
    code.replace(/"/g, "'").replace(/\s+/g, "").replace(/\n/g, "");

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setActiveQuestion(null);
    setUserAnswer("");
    setFeedback("");
  };

  const handleQuestionSelect = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
    setUserAnswer("");
    setFeedback("");
  };

  const handleSubmit = (questionIndex, correctAnswers) => {
    const normalizedUserAnswer = normalizeCode(userAnswer);
    const isCorrect = correctAnswers.some(
      (answer) => normalizeCode(answer) === normalizedUserAnswer
    );

    if (isCorrect) {
      const earnedPoints = selectedLevel * 10;
      setPoints((prev) => prev + earnedPoints);
      setFeedback(`Correct! You earned ${earnedPoints} points.`);
      setAnsweredQuestions((prev) => ({
        ...prev,
        [selectedLevel]: { ...prev[selectedLevel], [questionIndex]: true },
      }));
    } else {
      setFeedback("Incorrect. Please try again.");
    }
  };

  return (
    <div className="question-page">
      <Navbar
        levels={levels}
        selectedLevel={selectedLevel}
        onSelectLevel={handleLevelSelect}
        onBack={onBackToLanguages}
        points={points}
      />
      <div className="spacer" style={{ height: "20px" }}></div>
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index} className="question-item">
            <div
              className="question-header"
              onClick={() => handleQuestionSelect(index)}
            >
              Question {index + 1}
            </div>
            {activeQuestion === index && (
              <div className="question-content">
                <p>{question.description}</p>
                <textarea
                  className="user-input"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your code here..."
                  disabled={answeredQuestions[selectedLevel]?.[index]}
                ></textarea>
                <div className="buttons">
                  <button
                    className="submit-button"
                    onClick={() => handleSubmit(index, solutions[index])}
                    disabled={answeredQuestions[selectedLevel]?.[index]}
                  >
                    {answeredQuestions[selectedLevel]?.[index] ? "Answered" : "Submit"}
                  </button>
                </div>
                {feedback && <p className="feedback">{feedback}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
