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
import { JavaScriptQuestionsLvl1 } from "../data/javascript/JavaScriptQuestionsLvl1";
import { JavaScriptAnswersLvl1 } from "../data/javascript/JavaScriptAnswersLvl1";
import { JavaScriptQuestionsLvl2 } from "../data/javascript/JavaScriptQuestionsLvl2";
import { JavaScriptAnswersLvl2 } from "../data/javascript/JavaScriptAnswersLvl2";
import { JavaScriptQuestionsLvl3 } from "../data/javascript/JavaScriptQuestionsLvl3";
import { JavaScriptAnswersLvl3 } from "../data/javascript/JavaScriptAnswersLvl3";
import { JavaScriptQuestionsLvl4 } from "../data/javascript/JavaScriptQuestionsLvl4";
import { JavaScriptAnswersLvl4 } from "../data/javascript/JavaScriptAnswersLvl4";
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

  const questionsMap = {
    Python: [
      PythonQuestionsLvl1,
      PythonQuestionsLvl2,
      PythonQuestionsLvl3,
      PythonQuestionsLvl4,
    ],
    JavaScript: [
      JavaScriptQuestionsLvl1,
      JavaScriptQuestionsLvl2,
      JavaScriptQuestionsLvl3,
      JavaScriptQuestionsLvl4,
    ],
  };

  const answersMap = {
    Python: [
      PythonAnswersLvl1,
      PythonAnswersLvl2,
      PythonAnswersLvl3,
      PythonAnswersLvl4,
    ],
    JavaScript: [
      JavaScriptAnswersLvl1,
      JavaScriptAnswersLvl2,
      JavaScriptAnswersLvl3,
      JavaScriptAnswersLvl4,
    ],
  };

  const questions = questionsMap?.[language]?.[selectedLevel - 1] || [];
  const solutions = answersMap?.[language]?.[selectedLevel - 1] || [];

  useEffect(() => {
    const initialAnsweredQuestions = {};
    levels.forEach((level) => {
      initialAnsweredQuestions[level] = {};
    });
    setAnsweredQuestions((prev) => ({ ...initialAnsweredQuestions, ...prev }));
  }, []);

  const normalizeCode = (code) =>
    code.replace(/\"/g, "'").replace(/\s+/g, "").replace(/\n/g, "");

  const handleLevelSelect = (level) => {
    if (level === 4 && points < 200) return;
    setSelectedLevel(level);
    setActiveQuestion(null);
    setUserAnswer("");
    setFeedback("");
    setShowModal(false);
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
      setFeedback("Incorrect. Try again!");
    }
  };

  const handleGiveUp = (solution) => {
    setModalContent(solution[0]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
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
      <div className="spacer" style={{ height: "20px" }}></div> {/* Space below the navbar */}
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
                <div
                  className="question-description"
                  style={{ userSelect: "none" }}
                >
                  <p>{question.description}</p>
                  <div className="incorrect-code">
                    <pre>{question.incorrectCode}</pre>
                  </div>
                </div>
                <textarea
                  className="user-input"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  style={{ resize: "none" }}
                ></textarea>
                <div className="buttons">
                  <button
                    className="give-up-button"
                    onClick={() => handleGiveUp(solutions[index])}
                  >
                    Give Up
                  </button>
                  <button
                    className="submit-button"
                    onClick={() => handleSubmit(index, solutions[index])}
                    disabled={
                      answeredQuestions[selectedLevel]?.[index] || false
                    }
                  >
                    {answeredQuestions[selectedLevel]?.[index]
                      ? "Answered"
                      : "Submit"}
                  </button>
                </div>
                {feedback && <p className="feedback">{feedback}</p>}
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
