import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Summary = ({ score, totalQuestions }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  console.log(score);
  useEffect(() => {
    const generateRandomNumber = () => Math.floor(Math.random() * 20);
    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <div className="summary-container">
      <h2>Podsumowanie</h2>
      <p>
        Zdobyłeś {randomNumber} punktów z {totalQuestions} pytań.
      </p>
    </div>
  );
};

Summary.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Summary;
