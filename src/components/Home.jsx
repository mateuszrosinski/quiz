import PropTypes from "prop-types";

const Home = ({ onStart }) => {
  return (
    <div style={styles.container}>
      <h1>Quiz z wiedzy o Simonie</h1>
      <p>Sprawdź wiedzę o swojej kobiecie</p>
      <button onClick={onStart} style={styles.button}>
        Rozpocznij Quiz
      </button>
    </div>
  );
};

Home.propTypes = {
  onStart: PropTypes.func.isRequired,
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
  button: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
