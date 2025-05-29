import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import Infobox from "./Infobox";
import { useState } from "react";


export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        City: "Bareilly",
        feelsLike: 24.85,
        temp: 25.05,
        tempMin: 25.03,
        tempMax: 28.05,
        humidity: 61,
        weather: "haze"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    );
}