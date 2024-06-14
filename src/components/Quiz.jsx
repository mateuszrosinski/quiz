import { useState } from "react";
import PropTypes from "prop-types";
import questions from "../data/questions.json";

const Quiz = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    setScore(
      score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0)
    );
    setSelectedAnswer(null);
    currentQuestion < questions.length - 1
      ? setCurrentQuestion(currentQuestion + 1)
      : onQuizComplete(
          score +
            (selectedAnswer === questions[currentQuestion].correct ? 1 : 0)
        );
  };

  return (
    <div style={styles.container}>
      <h2>{questions[currentQuestion].question}</h2>
      <div style={styles.answers}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            style={
              selectedAnswer === index
                ? { ...styles.button, ...styles.selectedButton }
                : styles.button
            }
            onClick={() => handleAnswerSelect(index)}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
        style={styles.button}
      >
        Następne pytanie
      </button>
    </div>
  );
};

Quiz.propTypes = {
  onQuizComplete: PropTypes.func.isRequired,
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  answers: {
    margin: "20px 0",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#D3D3D3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  selectedButton: {
    backgroundColor: "#28a745",
  },
};

export default Quiz;
