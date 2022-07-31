import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherInfoComponent";
import "./styles.css";

function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const units = "metric";

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adb90ce08b7728f0bc8a1e7b573b70cc&units=${units}`);
    updateWeather(response.data);
    // console.log(response.data);
  };

  //`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=adb90ce08b7728f0bc8a1e7b573b70cc&units=metric`

  return (
    <div className="Container">
      <span className="AppLabel">~Vishal's Weather App</span>
      
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;


