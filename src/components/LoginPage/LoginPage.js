import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //
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
        if (data.success) {
          navigate("/about");
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
          {loginError && <p className="login-error">{loginError}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
