import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuditoriumOpen, setIsAuditoriumOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPassword("");
    setLoginError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "Шупетт") {
      setIsModalOpen(false);
      setIsAuditoriumOpen(true);
    } else {
      setLoginError("Неверный логин или пароль");
    }
  };

  const handleCloseAuditorium = () => {
    setIsAuditoriumOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <img
            src={User}
            alt="User"
            className="logo"
            onClick={handleUserIconClick}
          />
          <ul>
            <li>
              <Link to="/">О НАС</Link>
            </li>
            <li>
              <Link to="/rules">ПРАВИЛА</Link>
            </li>
            <li>
              <Link to="/map">КАРТА</Link>
            </li>
          </ul>
        </nav>
      </header>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
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
          </div>
        </div>
      )}

      {isAuditoriumOpen && (
        <div className="auditorium">
          <div className="auditorium-content">
            <h2>ПРОЙДИТЕ В АУДИТОРИЮ</h2>
            <button onClick={handleCloseAuditorium}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
