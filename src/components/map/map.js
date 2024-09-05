import React from "react";
import "./map.css";
import Route1Image from "../../assets/images/route1.png";
import Route2Image from "../../assets/images/route2.png";

function Map() {
  return (
    <div className="map-container">
      <h1 className="map-header">
        <span className="highlight">КАРТА</span>
      </h1>
      <div className="map-content">
        <div className="routes">
          <div className="route">
            <h2>Маршрут 1</h2>
            <img src={Route1Image} alt="Маршрут 1" className="route-image" />
          </div>
          <div className="route">
            <h2>Маршрут 2</h2>
            <img src={Route2Image} alt="Маршрут 2" className="route-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
