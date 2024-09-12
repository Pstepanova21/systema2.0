import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onClose }) {
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isAuditoriumOpen, setIsAuditoriumOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://systema-api.itc-hub.ru/api/loginsystema",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: "SY.Koruv228",
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setIsAuditoriumOpen(true);
        } else {
          setLoginError("Неверный логин или пароль");
        }
      } else {
        setLoginError("Ошибка авторизации");
      }
    } catch (error) {
      setLoginError("Ошибка сети");
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
          <div className="auditorium-content">
            <h2>ПРОЙДИТЕ В АУДИТОРИЮ</h2>
            <button onClick={onClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;