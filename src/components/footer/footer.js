import React, { useState } from "react";
import "./footer.css";
import footer from "../../assets/images/footer.png";
import vk from "../../assets/images/free-icon-logo-12868069 1.png";
import loginIcon from "../../assets/images/enter 1.png";
import LoginModal from "../LoginModal/LoginModal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer>
        <div className="footer-header">
          <div className="footer-header-left">
            <img src={footer} alt="Logo" className="footer-logo" />
            <h1>SYSTEMA</h1>
          </div>
          <div className="footer-header-right">
            <button className="login-button" onClick={handleLoginClick}>
              ВОЙТИ
              <img src={loginIcon} alt="Login" className="login-icon" />
            </button>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h2>ПРИСОЕДИНЯЙТЕСЬ</h2>
            <div className="vk-container">
              <img src={vk} alt="vk" className="vk" />
              <p>ВКОНТАКТЕ</p>
            </div>
          </div>
          <div className="footer-column">
            <h2>РЕЖИМ РАБОТЫ</h2>
            <p>с 6.66 до 10.111</p>
          </div>
        </div>
      </footer>

      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
    </>
  );
}

export default Footer;
