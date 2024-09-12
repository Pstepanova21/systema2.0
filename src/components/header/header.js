import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";
import LoginModal from "../LoginModal/LoginModal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
    </>
  );
}

export default Header;
