import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Current from './Current'
import Hourly from './Hourly'
import Daily from './Daily'

const API_KEY = process.env.REACT_APP_API_KEY;

const useStyles = makeStyles({
  title: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center'
  },
});

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [zip,setZip] = useState('')
  const styles = useStyles();

  const fetchWeather = () => {
    const url1 = new URL("https://api.openweathermap.org/data/2.5/weather?");
    url1.searchParams.append("appid", API_KEY);
    url1.searchParams.append("zip", zip);
    url1.searchParams.append("units", "imperial");
    fetch(url1)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        // also important to check html error codes
        // 200 means no errors
        if (obj.cod === 200) {
          setLocation(obj.name)
          const url2 = new URL("https://api.openweathermap.org/data/2.5/onecall?");
          url2.searchParams.append("appid", API_KEY);
          url2.searchParams.append("lat", obj.coord.lat);
          url2.searchParams.append("lon", obj.coord.lon);
          url2.searchParams.append("units", "imperial");
          fetch(url2)
            .then((resp) => {
              return resp.json();
            })
            .then((obj2) => {
              setWeather(obj2)
            })
        } else {
          setWeather(false);
        }
      })
  };
  
  const handleClick = () => {
    if (zip.length === 5) {
      fetchWeather();
    }
  };

  if (weather === null) {
    return (
      <h1>
        Welcome to My Weather App
        <div>
          To begin, type in your 5-digit zip code
          <Input 
            placeholder="Zip code" 
            onChange={(e) => {setZip(e.target.value)}}
          />
          <Button onClick={handleClick}>
              Search
          </Button>
        </div>
      </h1>
    );
  }

    return (
      <h1 className={styles.title}>
        Weather Forecast for {location}
        <br/>
        <div>
          Relocate: &nbsp;
          <Input 
            placeholder="Zip code" 
            onChange={(e) => {setZip(e.target.value)}}
          />
          <Button onClick={handleClick}>
              Search
          </Button>
        </div>
        {/*
        <RadioGroup row id="radio-group" defaultValue="current">
          <FormControlLabel
            id="current"
            control={<Radio color="primary" />}
            label="Current forecast"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="hourly"
            control={<Radio color="primary" />}
            label="Hourly forecast for the next 48 hours"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="daily"
            control={<Radio color="primary" />}
            label="Daily forecast for the next 8 days"
            labelPlacement="bottom"
          />
        </RadioGroup>
        */}
        <Current weather={weather.current}></Current>
        <Hourly weather={weather.hourly}></Hourly>
        <Daily weather={weather.daily}></Daily>
      </h1>
    )
  
}
export default App;
