import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
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

  if (weatherData.ready) {
    return (
      <div className="page">
        <div className="container">
          <div className="weather">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter a city..."
                    aria-label="default input example"
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

            <div className="weather-information">
              <div className="row">
                <div className="col-6">
                  <h1>{weatherData.city}</h1>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>

                  <ul>
                    <li>
                      <FormattedDate date={weatherData.date} />
                    </li>

                    <span>{weatherData.description}</span>

                    <li>
                      Humidity:
                      <strong className="humidity">
                        {weatherData.humidity}
                      </strong>
                      <span className="measurement">%,</span> Wind:
                      <strong className="wind">{weatherData.wind}</strong>
                      <span className="measurement">mph</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div className="temperature-container">
                    <div>
                      <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt={weatherData.description}
                        className="current-weather-icon"
                        width="100"
                        height="100"
                      />
                      <span className="temperature">
                        {weatherData.temperature}
                      </span>
                      <span className="unit">
                        <a href="/" className="unit-conversion">
                          °C
                        </a>{" "}
                        |
                        <a href="/" className="unit-conversion">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weather-forecast"></div>
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
    let apiKey = "49fcd8b8be4b347d531351f264a4f0d0";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);

    return "Loading...";
  }
}
