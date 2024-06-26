import React from "react";
import sunny from "../assets/Sunny.svg"


function WeatherCard() {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">CITY DATA HERE</h3>
            <h5 className="card-text">TEMPERATURE DATA HERE</h5>
            <h5 className="card-text">FORECAST DATA HERE</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;