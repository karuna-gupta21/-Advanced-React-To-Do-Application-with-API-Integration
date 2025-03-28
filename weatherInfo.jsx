import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./weatherInfo.css";
import { fetchWeather } from "../store/weatherSlice";

const WeatherInfo = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Fetching weather for:", lat, lon);
        dispatch(fetchWeather(`${lat}, ${lon}`));
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [dispatch]);

  return (
    <div className="weather-container">
      <h1 className="weather-heading">Weather Info</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        className="weather-input"
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="weather-btn"
        onClick={() => dispatch(fetchWeather(city))}
      >
        Get Weather
      </button>

      {weather.status === "loading" && (
        <p className="fetch-weather">Fetching weather...</p>
      )}
      {weather.status === "failed" && (
        <p className="error-message">Error: {weather.error}</p>
      )}

      {weather.status === "succeeded" && weather.data && (
        <div className="weather-details">
          <h3 className="weather-city">{weather.data.name}</h3>
          <p className="weather-temp">
            Temperature: {weather.data.main.temp}°C
          </p>
          <p className="weather-condition">
            Condition: {weather.data.weather[0].description}
          </p>
          <p className="weather-humidity">
            Humidity: {weather.data.main.humidity}%
          </p>
          <p className="weather-wind">
            Wind Speed: {weather.data.wind.speed} m/s
          </p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
