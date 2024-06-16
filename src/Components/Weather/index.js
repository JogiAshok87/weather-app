import React from 'react';
import './index.css'

function Weather({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  const { name, main, weather, wind, dt } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString();
  const time = new Date(dt * 1000).toLocaleTimeString();

  return (
    <div className="weather-info">
        <div className='location-description'>
        <img src="/image.png" alt=""/>
        <h2>{name}</h2>
        <p className="date-time"><strong>Date: </strong>{date} | <strong>Time: </strong>{time}</p>
        </div>
      
      <div className="weather-cards">
        <div className="weather-card">
          <h3>Temperature</h3>
          <p>{main.temp}°C</p>
          <img src="/Temp.png" alt=""/>
        </div>
        <div className="weather-card">
          <h3>Weather</h3>
          <p>{weather[0].description}</p>
          <img src="/Weather.png" alt="clouds_Img"/>
        </div>
        <div className="weather-card">
          <h3>Humidity</h3>
          <p>{main.humidity}%</p>
          <img src="/humidity.png" alt=""/>
        </div>
        <div className="weather-card">
          <h3>Wind Speed</h3>
          <p>{wind.speed} m/s</p>
          <img src="/wind.png" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Weather;
