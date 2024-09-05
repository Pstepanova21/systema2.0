import React, { useState } from "react";
import "./puzzle.css";

function Puzzle() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const correctAnswer = "правильный ответ";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage("Правильно!");
    } else {
      setMessage("Попробуйте еще раз.");
    }
  };

  return (
    <div className="puzzle-container">
      <h1>Загадка</h1>
      <p>......</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Введите ваш ответ"
        />
        <button type="submit">Проверить</button>
      </form>
      {message && <p className="puzzle-message">{message}</p>}
    </div>
  );
}

export default Puzzle;
