import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
    const [city, setCity] = useState("Chandigarh");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
            );
            setWeather(res.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const handleSearch = () => {
        fetchWeather();
    };

    return (
        <div className="app">
            <h1>Prabh Weather Forecast</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
            {weather ? (
                <div className="weather-info">
                    <h2>{weather.city.name}</h2>
                    <p>Temperature: {weather.list[0].main.temp} °C</p>
                    <p>Humidity: {weather.list[0].main.humidity}%</p>
                    <p>Weather: {weather.list[0].weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;