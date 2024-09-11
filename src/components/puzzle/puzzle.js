import React, { useState } from "react";
import "./puzzle.css";

import image1 from "../../assets/images/puzzle1.jpg";
import image2 from "../../assets/images/puzzle2.jpg";
import image3 from "../../assets/images/puzzle3.jpg";
import image4 from "../../assets/images/puzzle4.jpg";
import audio5 from "../../assets/audio/result (9).wav";

const puzzles = [
  { image: image1, answer: "дэвид тьюлис", hint: "звук" },
  { image: image2, answer: "4,17е+12", hint: "5" },
  { image: image3, answer: "люси лью", hint: "мероприятие" },
  { image: image4, answer: "адамант", hint: "лицо" },
  { image: audio5, answer: "амели", hint: "бирманская", isAudio: true },
];

function Puzzle() {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [hints, setHints] = useState([]);
  const [showHintsTitle, setShowHintsTitle] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === puzzles[currentPuzzle].answer.toLowerCase()) {
      setMessage("Правильно!");
      setTimeout(() => {
        if (currentPuzzle === puzzles.length - 1) {
          setHints((prevHints) => [...prevHints, puzzles[currentPuzzle].hint]);
          setShowCompletion(true);
        } else {
          setHints((prevHints) => {
            if (!showHintsTitle) {
              setShowHintsTitle(true);
            }
            return [...prevHints, puzzles[currentPuzzle].hint];
          });
          setCurrentPuzzle(currentPuzzle + 1);
          setAnswer("");
          setMessage("");
        }
      }, 1000);
    } else {
      setMessage("Попробуйте еще раз.");
    }
  };

  return (
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
          <form onSubmit={handleSubmit}>
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
  );
}

export default Puzzle;
