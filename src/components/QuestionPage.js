import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { PythonQuestionsLvl1 } from "../data/python/PythonQuestionsLvl1";
import { PythonAnswersLvl1 } from "../data/python/PythonAnswersLvl1";
import { PythonQuestionsLvl2 } from "../data/python/PythonQuestionsLvl2";
import { PythonAnswersLvl2 } from "../data/python/PythonAnswersLvl2";
import { PythonQuestionsLvl3 } from "../data/python/PythonQuestionsLvl3";
import { PythonAnswersLvl3 } from "../data/python/PythonAnswersLvl3";
import { PythonQuestionsLvl4 } from "../data/python/PythonQuestionsLvl4";
import { PythonAnswersLvl4 } from "../data/python/PythonAnswersLvl4";
import { TipsForLvl1 } from "../data/python/TipsForLvl1";
import "../styles/QuestionPage.css";

export default function QuestionPage({ language = "Python", onBackToLanguages }) {
  const levels = [1, 2, 3, 4];
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [points, setPoints] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [showTip, setShowTip] = useState(false);

  const questionsMap = {
    Python: [
      PythonQuestionsLvl1,
      PythonQuestionsLvl2,
      PythonQuestionsLvl3,
      PythonQuestionsLvl4,
    ],
  };

  const answersMap = {
    Python: [
      PythonAnswersLvl1,
      PythonAnswersLvl2,
      PythonAnswersLvl3,
      PythonAnswersLvl4,
    ],
  };

  const questions = questionsMap[language]?.[selectedLevel - 1] || [];
  const solutions = answersMap[language]?.[selectedLevel - 1] || [];

  useEffect(() => {
    const initialAnsweredQuestions = {};
    levels.forEach((level) => {
      initialAnsweredQuestions[level] = {};
    });
    setAnsweredQuestions((prev) => ({ ...initialAnsweredQuestions, ...prev }));
  }, [levels]);

  const normalizeCode = (code) =>
    code.replace(/"/g, "'").replace(/\s+/g, "").replace(/\n/g, "");

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setActiveQuestion(null);
    setUserAnswer("");
    setFeedback("");
    setShowTip(false); // Reset tip visibility when switching levels
  };

  const handleQuestionSelect = (index) => {
    setActiveQuestion(index);
    setUserAnswer("");
    setFeedback("");
    setShowTip(false); // Reset tip visibility when selecting a question
  };

  const handleSubmit = (questionIndex) => {
    const normalizedUserAnswer = normalizeCode(userAnswer);
    const correctAnswers = solutions[questionIndex] || [];
    const isCorrect = correctAnswers.some(
      (answer) => normalizeCode(answer) === normalizedUserAnswer
    );

    if (isCorrect) {
      const earnedPoints = selectedLevel === 4 ? 100 : selectedLevel * 10;
      setPoints((prev) => prev + earnedPoints);
      setFeedback(`Correct! You earned ${earnedPoints} points.`);
    } else {
      setFeedback("Incorrect. Try again.");
    }

    setAnsweredQuestions((prev) => ({
      ...prev,
      [selectedLevel]: { ...prev[selectedLevel], [questionIndex]: true },
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
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
                {selectedLevel === 1 && (
                  <button
                    onClick={() => setShowTip(true)}
                    className="show-tip-button"
                  >
                    Show Tip
                  </button>
                )}
                {showTip && selectedLevel === 1 && (
                  <div className="tip-section">
                    <h4>Tip:</h4>
                    <p>{TipsForLvl1[index]}</p>
                  </div>
                )}
                <textarea
                  className="user-input"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  style={{ resize: "none" }}
                  onPaste={preventCopyPaste}
                  onCopy={preventCopyPaste}
                  disabled={answeredQuestions[selectedLevel]?.[index]}
                ></textarea>
                <button
                  onClick={() => handleSubmit(index)}
                  disabled={answeredQuestions[selectedLevel]?.[index]}
                >
                  Submit
                </button>
                {feedback && <p>{feedback}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Solution</h3>
            <div className="solution-content">
              {modalContent.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
