import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
import "./App.css";

const App = () => {
  const [stage, setStage] = useState("home");
  const [score, setScore] = useState(0);

  const startQuiz = () => setStage("quiz");
  const completeQuiz = (finalScore) => {
    setScore(finalScore);
    setStage("summary");
  };
  const restartQuiz = () => setStage("home");

  return (
    <div className="app">
      {stage === "home" ? (
        <Home onStart={startQuiz} />
      ) : stage === "quiz" ? (
        <Quiz onQuizComplete={completeQuiz} />
      ) : (
        <Summary score={score} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default App;
