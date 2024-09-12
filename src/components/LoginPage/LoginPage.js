import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://systema-api.itc-hub.ru/api/loginteam",
        new URLSearchParams({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        navigate("/about");
      } else {
        setLoginError("Неверный логин или пароль");
      }
    } catch (error) {
      setLoginError("Ошибка сети");
    }
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
              required
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {loginError && <p className="login-error">{loginError}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
