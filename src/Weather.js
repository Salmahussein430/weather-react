import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    console.log(response);
    setDisplay(true);
    setWeather({
      temperature: response.data.main.temp,
      descrpition: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "49fcd8b8be4b347d531351f264a4f0d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function showCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={showCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (display) {
    return (
      <div>
        {form}
        <ul className="info">
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <li>Description: {weather.descrpition}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}kmh</li>
          <li>
            <img src={weather.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
