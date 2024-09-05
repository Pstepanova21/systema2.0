import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь проверка логина и пароля
    navigate("/about");
  };

  return (
    <div className="login-page">
      <div className="login-modal">
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
