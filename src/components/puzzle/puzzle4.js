import React, { useState } from "react";
import axios from "axios";
import image4 from "../../assets/images/puzzle4.jpg";
import "./puzzle.css";

const hints = {
  1: "звук",
  2: "5",
  3: "мероприятие",
  4: "лицо",
  5: "бирманская",
};

function Puzzle4({ teamId, token, setToken, setTeamId }) {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");
  const [showHintTitle, setShowHintTitle] = useState(false);

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    const taskId = 4;
    try {
      const response = await axios.post(
        "https://systema-api.itc-hub.ru/api/task",
        {
          team_id: teamId,
          task_id: taskId,
          answer: answer.toLowerCase(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Правильно!");
        setHint(hints[taskId] || "Нет подсказки");
        setShowHintTitle(true);
        setAnswer("");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.error;
        if (errorMessage === "task already completed") {
          setHint(hints[taskId] || "Нет подсказки");
          setShowHintTitle(true);
          setMessage("Это задание уже выполнено.");
          setAnswer("");
        } else if (errorMessage === "incorrect answer") {
          setMessage("Ответ неверный. Попробуйте снова.");
        }
      } else {
        setMessage("Произошла ошибка. Попробуйте еще раз.");
      }
    }
  };

  return (
    <div className="puzzle-container">
      <h1>Загадка 4</h1>
      <img src={image4} alt="Загадка 4" className="puzzle-image" />
      <form onSubmit={handleSubmitTask}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Введите ваш ответ"
        />
        <button type="submit">Проверить</button>
        {message && <p className="puzzle-message">{message}</p>}
      </form>
      <div className="hint-container">
        {showHintTitle && <h2 className="hint-title">Подсказка</h2>}
        {hint && <p className="puzzle-hint">{hint}</p>}
      </div>
    </div>
  );
}

export default Puzzle4;
