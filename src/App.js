import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import SearchBar from './Components/SearchBar';
import Weather from './Components/Weather';
import './App.css';

const API_KEY = '8fbe5c970e0a37c0cad905b2169363db';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Failed to fetch weather data. Please try again later.');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Weather App</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FaSun font-size={40}/> : <FaMoon fontSize={30}/>}
        </button>
      </header>
      <SearchBar onSearch={fetchWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
}

export default App;
