import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          <a href="/" className="unit-conversion">
            °C
          </a>{" "}
          |
          <a href="/" className="unit-conversion" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" className="unit-conversion">
            °C
          </a>{" "}
          |
          <a href="/" className="unit-conversion" onClick={convertCelsius}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
