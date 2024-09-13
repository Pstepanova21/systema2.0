import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";
import LoginModal from "../LoginModal/LoginModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header({
  token,
  setMapImage,
  setTeamId,
  teamId,
  setIsModalOpen,
  isModalOpen,
}) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMapClick = async () => {
    try {
      const response = await axios.get(
        "https://systema-api.itc-hub.ru/api/map",
        {
          params: { team_id: teamId },
          headers: {
            Authorization: token,
          },
        }
      );

      setMapImage(response.data.image);
      navigate("/map");
    } catch (err) {
      setError("Ошибка при загрузке карты.");
    }
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
              <Link to="/about">О НАС</Link>
            </li>
            <li>
              <Link to="/rules">ПРАВИЛА</Link>
            </li>
            <li>
              <Link to="#" onClick={handleMapClick}>
                КАРТА
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen && (
        <LoginModal
          onClose={handleCloseModal}
          token={token}
          setTeamId={setTeamId}
          teamId={teamId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default Header;
