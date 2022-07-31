import React from "react";
import "./components-styles/CityComponent.css"

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img className="WelcomeWeatherLogo" src={"../icons/perfect-day.svg"} alt="Welcome weather logo" />
      <div className="ChooseCityLabel">Enter City Name</div>
      <form className="SearchBox" onSubmit={fetchWeather} autoFocus>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
};
export default CityComponent;