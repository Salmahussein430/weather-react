import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      ready: true,

      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
    });
  }
  function search() {
    let apiKey = "49fcd8b8be4b347d531351f264a4f0d0";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="page">
        <div className="container">
          <div className="weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter a city..."
                    aria-label="default input example"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-3 p-0">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Search"
                  />
                </div>
              </div>
            </form>

            <hr />
            <WeatherInfo data={weatherData} />

            <hr />
            <footer>
              Project coded by Salma Hussein and is {""}
              <a href="https://github.com/Salmahussein430/my-project-weather-app">
                open-sourced on Github {""}
              </a>
              and
              <a href="https://hopeful-ramanujan-910a32.netlify.app/">
                {""} hosted on Netlify
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
