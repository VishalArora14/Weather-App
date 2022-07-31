import React from "react";
import "./components-styles/WeatherInfoComponent.css"
import WeatherSubInfo from "./WeatherSubInfo";

const WeatherComponent = (props) => {
    const {weather} = props;
    // console.log(weather)
    const isDay = weather.weather[0].icon.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    function refreshPage(){
      window.location.reload(false);
    }

    return (
        <>
          <div className="WeatherContainer">
              <span className="Condition">
                  <span>{`${weather.main.temp}°C`}</span> {`| ${weather.weather[0].description}`}
              </span>
              <img className="WeatherIcon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"/>
          </div>

          <div className="Location">{`${weather.name}, ${weather.sys.country}`}</div>

          <span className="WeatherInfoLabel">Weather Info : </span>

          <div className="WeatherInfoContainer">
              <WeatherSubInfo name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather.sys[isDay ? "sunset" : "sunrise"])}`}/>
              <WeatherSubInfo name={"humidity"} value={weather.main.humidity}/>
              <WeatherSubInfo name={"wind"} value={weather.wind.speed}/>
              <WeatherSubInfo name={"pressure"} value={weather.main.pressure}/>
              <WeatherSubInfo name={"feels_like"} value={weather.main.feels_like}/>
          </div>

          <button className="BackBtn" onClick={refreshPage}>Back</button>
        </>
    );
};

export default WeatherComponent;