import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-information">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <span className="location">
            <i className="fas fa-map-marker-alt"></i>
          </span>

          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>

            <span>{props.data.description}</span>

            <li>
              Humidity:
              <strong className="humidity">{props.data.humidity}</strong>
              <span className="measurement">%,</span> Wind:
              <strong className="wind">{props.data.wind}</strong>
              <span className="measurement">mph</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container">
            <div>
              <WeatherIcon icon={props.data.icon} />

              <span className="temperature">{props.data.temperature}</span>
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
  );
}
