import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./puzzle.css";
import { useNavigate } from "react-router-dom";

import image1 from "../../assets/images/puzzle1.jpg";
import image2 from "../../assets/images/puzzle2.jpg";
import image3 from "../../assets/images/puzzle3.jpg";
import image4 from "../../assets/images/puzzle4.jpg";
import audio5 from "../../assets/audio/result (9).wav";

const puzzles = [
  { image: image1, answer: "дэвид тьюлис", hint: "звук", task_id: 1 },
  { image: image2, answer: "4,17е+12", hint: "5", task_id: 2 },
  { image: image3, answer: "люси лью", hint: "мероприятие", task_id: 3 },
  { image: image4, answer: "адамант", hint: "лицо", task_id: 4 },
  {
    image: audio5,
    answer: "амели",
    hint: "бирманская",
    isAudio: true,
    task_id: 5,
  },
];

function Puzzle({ teamId, token, setToken, setTeamId }) {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [hints, setHints] = useState([]);
  const [showHintsTitle, setShowHintsTitle] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

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
          task_id: puzzles[currentPuzzle].task_id,
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
        const hint = response.data.hint;
        setTimeout(() => {
          if (currentPuzzle === puzzles.length - 1) {
            setHints((prevHints) => [...prevHints, hint]);
            setShowCompletion(true);
          } else {
            setHints((prevHints) => {
              if (!showHintsTitle) setShowHintsTitle(true);
              return [...prevHints, hint];
            });
            setCurrentPuzzle(currentPuzzle + 1);
            setAnswer("");
            setMessage("");
          }
        }, 2000);
      }
    } catch (error) {
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.error;
        if (errorMessage === "task already completed") {
          setMessage("Это задание уже выполнено.");
          setTimeout(() => {
            setHints((prevHints) => {
              if (!showHintsTitle) setShowHintsTitle(true);
              return [...prevHints, puzzles[currentPuzzle].hint];
            });
            setCurrentPuzzle(currentPuzzle + 1);
            setAnswer("");
            setMessage("");
          }, 2000);
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
      {showCompletion ? (
        <div className="completion-message">
          <h1>Вы отгадали все!</h1>
          <div className="hints-container">
            <h2 className="hints-title">Все подсказки</h2>
            {hints.map((hint, index) => (
              <p key={index} className="puzzle-hint">
                {hint}
              </p>
            ))}
          </div>
          <Link to="/about" className="back-link">
            Перейти на главную страницу
          </Link>
        </div>
      ) : (
        <>
          <h1>Загадка {currentPuzzle + 1}</h1>
          {puzzles[currentPuzzle].isAudio ? (
            <audio controls className="puzzle-audio">
              <source src={puzzles[currentPuzzle].image} type="audio/wav" />
              Ваш браузер не поддерживает аудиоформат.
            </audio>
          ) : (
            <img
              src={puzzles[currentPuzzle].image}
              alt={`Загадка ${currentPuzzle + 1}`}
              className="puzzle-image"
            />
          )}
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

          <div className="hints-container">
            {showHintsTitle && <h2 className="hints-title">Подсказки</h2>}
            {hints.map((hint, index) => (
              <p key={index} className="puzzle-hint">
                {hint}
              </p>
            ))}
          </div>
        </>
      )}
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

export default Puzzle;
