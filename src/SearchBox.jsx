/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-catch */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error, setError] = useState(false);
    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "84bac872a5af86553a445f2acf58de9c";

    let getweatherinfo = async ()=>{
        try{
            let res = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
            let jsonres = await res.json();
            let result = 
            {
                City : city,
                temp : jsonres.main.temp,
                tempMin : jsonres.main.temp_min,
                tempMax : jsonres.main.temp_max,
                humidity : jsonres.main.humidity,
                feelsLike : jsonres.main.feels_like,
                weather : jsonres.weather[0].description,
            }
            return result;
        }
        catch(err){
            throw err;

        }

    };


    let handlechange = (event)=>{
        setCity(event.target.value);

    };
    let handlesubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let info = await getweatherinfo();
            updateInfo(info);
        }
        catch(err){
            setError(true);

        }

    };
    return (
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handlechange} required />
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>

            { error && <p>No such place exists!</p>}
            </form>
        </div>
    );
}