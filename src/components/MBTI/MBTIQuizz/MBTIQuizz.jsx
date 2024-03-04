import { useState } from "react";
import Navbar from "../../HomePage/header/Navbar";
import { Footer } from "../../SignUp/RegisterForm";
import "../MBTIQuizz/MBTIQuizz.model.css";
import { MBTIQuestion } from "../../../data/MBTI/MBTIQuizz/MBTIQuizz";

const MBTIQuizz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerChange = (questionId, value) => {
    // Update the selected answers
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mbti-test-heading">
          <h1 className="mbti-test-heading__title">
            Làm bài trắc nghiệm MBTI miễn phí
          </h1>
          <div className="mbti-test-heading__description">
            Khám phá tiềm năng bản thân, tỏa sáng năng lực nghề nghiệp
          </div>
        </div>
        <div className="mbti-test-body">
          <div className="mbti-test-questions">
            <ol>
              {MBTIQuestion.map((question) => (
                <li
                  key={question.id}
                  className="mbti-test-question required-question active-question"
                >
                  <div className="mbti-test-question__title">
                    {question.id}. {question.question}
                  </div>
                  <div className="mbti-test-question__answers">
                    {question.answers &&
                      question.answers.map((answer) => (
                        <div
                          key={answer.value}
                          className={`mbti-test-question__answers--item ${
                            selectedAnswers[question.id] === answer.value
                              ? "checked"
                              : ""
                          }`}
                        >
                          <label>
                            <input
                              type="radio"
                              name={`answers[${question.id}]`}
                              value={answer.value}
                              data-question-id={question.id}
                              checked={
                                selectedAnswers[question.id] === answer.value
                              }
                              onChange={() =>
                                handleAnswerChange(question.id, answer.value)
                              }
                            />
                            <span>{answer.text}</span>
                          </label>
                        </div>
                      ))}
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-center">
              <button id="submit" className="btn btn-submit-quizz btn-lg">
                Xem kết quả
              </button>
            </p>
            <div className="quizz-results">
              <h2 className="type" id="type">
                <p className="type-description" id="type-details">
                  <strong id="type-title"></strong>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MBTIQuizz;
