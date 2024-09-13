import React, { useState } from "react";
import axios from "axios";
import "./puzzle.css";

function Puzzle5({ teamId, token, setToken, setTeamId }) {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");
  const [showHintTitle, setShowHintTitle] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://systema-api.itc-hub.ru/api/loginteam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: username,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setToken(data.access_token);
        setTeamId(data.team_id);
      } else {
        const data = await response.json();
        setLoginError(data.error || "Ошибка авторизации");
      }
    } catch (error) {
      setLoginError("Ошибка сети");
    }
  };

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://systema-api.itc-hub.ru/api/task",
        {
          team_id: teamId,
          task_id: 5,
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
        setHint("Подсказка для задачи 5");
        setShowHintTitle(true);
        setAnswer("");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.error;
        if (errorMessage === "task already completed") {
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

  return token && teamId ? (
    <div className="puzzle-container">
      <h1>Загадка 5</h1>
      <audio controls>
        <source src="/path/to/audio.wav" type="audio/wav" />
        Ваш браузер не поддерживает аудио.
      </audio>
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
  ) : (
    <div className="login-page">
      <div className="login-modal">
        <h2>Авторизация</h2>
        <form onSubmit={handleLogin}>
          <label>
            Логин:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {loginError && <p className="login-error">{loginError}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Puzzle5;
