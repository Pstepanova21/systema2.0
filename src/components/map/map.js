import React from "react";
import "./map.css";

function Map({ mapImage }) {
  const baseUrl = "https://systema-api.itc-hub.ru"; // Базовый URL для изображений

  return (
    <div className="map-container">
      <h1 className="map-header">
        <span className="highlight">КАРТА</span>
      </h1>
      <div className="map-content">
        <div className="routes">
          <div className="route">
            {/* Проверяем, есть ли изображение */}
            {mapImage ? (
              <img
                src={`${baseUrl}${mapImage}`} // Собираем полный путь к изображению
                alt="Карта команды"
                className="route-image"
                onError={(e) => {
                  // Если изображение не загружается, показываем сообщение об ошибке
                  e.target.src = "";
                  e.target.alt = "Изображение не найдено";
                }}
              />
            ) : (
              <p>Изображение карты не доступно</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
