import React from "react";
import "./footer.css";
import footer from "../../assets/images/footer.png";
import vk from "../../assets/images/free-icon-logo-12868069 1.png";

function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <div
          className="footer-header-left"
          onClick={() => (window.location.href = "https://vk.com/kmk_sys")}
          style={{ cursor: "pointer" }}
        >
          <img src={footer} alt="Logo" className="footer-logo" />
          <h1>SYSTEMA</h1>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h2>ПРИСОЕДИНЯЙТЕСЬ</h2>
          <div className="vk-container">
            <img
              src={vk}
              alt="vk"
              className="vk"
              onClick={() => (window.location.href = "https://vk.com/kmk_sys")}
              style={{ cursor: "pointer" }}
            />
            <p
              onClick={() => (window.location.href = "https://vk.com/kmk_sys")}
              style={{ cursor: "pointer" }}
            >
              ВКОНТАКТЕ
            </p>
          </div>
        </div>
        <div className="footer-column">
          <h2>РЕЖИМ РАБОТЫ</h2>
          <p>с 6.66 до 10.111</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
