import React, { useState } from "react";
import questionsData from "./questions.json";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./App.css";

export default function Quiz() {
  const questions = questionsData;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const hasPrev = currentQuestion > 0;
  const hasNext = currentQuestion < questions.length - 1;

  function handlePrevClick() {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption(null);
  }

  function handleNextClick() {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  }

  function handleChooseOption(option) {
    setSelectedOption(option);
  }

  return (
    <div className="quiz">
      <div className="question-section">
        <p>{questions[currentQuestion].question}</p>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <button
                style={{
                  backgroundColor:
                    selectedOption === option ? "#34ff30" : "white",
                  width: "100%",
                  padding: "10px",
                  fontSize: "1rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleChooseOption(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        {hasPrev && (
          <button onClick={handlePrevClick} className="navigate-button">
            Prev
          </button>
        )}
        {hasNext && (
          <button onClick={handleNextClick} className="navigate-button">
            Next
          </button>
        )}
      </div>
      <div className="pagination-section">
        <Stack spacing={2} className="pagination">
          <Pagination
            count={questions.length}
            page={currentQuestion + 1}
            color="primary"
            hidePrevButton
            hideNextButton
            siblingCount={questions.length}
          />
        </Stack>
      </div>
    </div>
  );
}
