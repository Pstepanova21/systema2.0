import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onClose, teamId, token }) {
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isAuditoriumOpen, setIsAuditoriumOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://systema-api.itc-hub.ru/api/loginsystema",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: new URLSearchParams({
            username: "SY.Koruv228",
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status === "win") {
          setIsAuditoriumOpen(true);
          setMessage("Ждем вас в сквере у РЭУ!");
        }
      } else if (response.status === 400) {
        const data = await response.json();

        if (data.status === "lose") {
          setIsAuditoriumOpen(true);
          setMessage("Пройдите к Павелецкой плазе.");
        }
        if (data.error === "incorrect data") {
          setLoginError("Неверные данные. Попробуйте снова.");
        } else if (data.error === "оу ноу, вы проиграли") {
          setLoginError("оу ноу, вы проиграли :(");
        }
      } else if (response.status === 406) {
        const data = await response.json();
        if (data.error === "required access level 2") {
          setLoginError(
            "Требуется уровень доступа 2. Попробуйте другой логин."
          );
        }
      } else {
        setLoginError("Ошибка авторизации. Попробуйте снова.");
      }
    } catch (error) {
      setLoginError("Ошибка сети. Проверьте соединение.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {!isAuditoriumOpen ? (
          <>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Логин:
                <input
                  type="text"
                  name="username"
                  value="SY.Koruv228"
                  readOnly
                />
              </label>
              <label>
                Пароль:
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-field"
                  autoComplete="off"
                />
              </label>
              {loginError && <p className="login-error">{loginError}</p>}
              <button type="submit">Войти</button>
            </form>
          </>
        ) : (
          <div className="result-content">
            <h2>{message}</h2>
            <button onClick={onClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
