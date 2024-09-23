import React, { useState } from "react";
import axios from "axios";
import "./puzzle.css";

const hints = {
  1: "звук",
  2: "5",
  3: "мероприятие",
  4: "лицо",
  5: "бирманская",
};

function Puzzle5({ teamId, token, setToken, setTeamId }) {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");
  const [showHintTitle, setShowHintTitle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    const taskId = 5;
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
        setShowModal(true);
        setModalMessage("Поздравляем, вы взломали SYSTEMу!");
        setAnswer("");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.error;
        if (errorMessage === "task already completed") {
          setHint(hints[taskId] || "Нет подсказки");
          setShowHintTitle(true);
          setShowModal(true);
          setModalMessage("Поздравляем, вы взломали SYSTEMу!");
          setMessage("Это задание уже выполнено.");
          setAnswer("");
        } else if (errorMessage === "incorrect answer") {
          setShowModal(true);
          setModalMessage("Система посчитала вас опасным, вы были стёрты.");
          setMessage("Ответ неверный. Попробуйте снова.");
        }
      } else {
        setMessage("Произошла ошибка. Попробуйте еще раз.");
      }
    }
  };

  return (
    <div className="puzzle-container">
      <h1>Загадка 5</h1>
      <a
        href="https://docs.google.com/spreadsheets/d/1QF-jZX5eAa6vMMZQKnZ1SFmZFd7zIKaOlMRDuAqXx4I/edit?gid=0#gid=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Перейти к загадке
      </a>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Puzzle5;
