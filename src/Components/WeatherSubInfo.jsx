import React from "react";

const WeatherInfoIcons = {
    sunset: "../icons/temp.svg",
    sunrise: "../icons/temp.svg",
    humidity: "../icons/humidity.svg",
    wind: "../icons/wind.svg",
    pressure: "../icons/pressure.svg",
    feels_like: "../icons/sunny.svg"
};

function weatherSubInfo(props){
    const {name, value} = props;
    return (
        <div className="InfoContainer">
            <img src={WeatherInfoIcons[name]} alt="InfoIcon"/>
            <span className="InfoLabel">
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
}

export default weatherSubInfo;