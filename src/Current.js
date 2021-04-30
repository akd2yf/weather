import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Thermometer from 'react-thermometer-component';
import ReactSpeedometer from "react-d3-speedometer"
import wind from 'wind.png';
import sunset from 'sunset.jpg';


const useStyles = makeStyles({
    title: {
      color: 'black',
      fontSize: 32,
      textAlign: 'center'
    },
    item: {
      fontSize: 16
    },
    grid: {
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)",
        fontSize: 14,
        textAlign: 'center'
      }
  });

export default function Current ( {weather} ) {
    const styles = useStyles();
    console.log(weather);

    return(
        <h1>
            <div  className={styles.title}>Current forecast:</div>
            <br/>
                <div className={styles.grid}>
                    {console.log(weather)}
                    <div>
                        <div>Current Temperature: {weather.temp} °F</div>
                        <div>Feels Like: <br/> {weather.feels_like} °F</div>
                        <div>Dew Point: <br/> {weather.dew_point} °F</div>
                        <br/>
                        <div style={{paddingLeft: 110}}><Thermometer
                        theme="light"
                        value={weather.temp}
                        max="150"
                        steps="3"
                        format="°F"
                        size="large"
                        height="200"
                        />
                        </div>
                        
                    </div>
                    <div>
                        <div>Humidity: {weather.humidity} %</div>
                        <div>Wind Direction: {weather.wind_deg}°</div>
                        <div>Wind Gust: {weather.wind_gust} mph</div>
                        <div>Wind Speed: {weather.wind_speed} mph</div>
                        <img src={wind} width='200' height='200' />
                    </div>
                    <div>
                        <div>Atmospheric Pressure: {weather.pressure} hPa</div>
                        <ReactSpeedometer
                            value={weather.pressure}
                            minValue="0"
                            maxValue="2000"
                        />
                    </div>
                    <div>
                        <div>Sunrise at: {weather.sunrise}</div>
                        <div>Sunset at: {weather.sunset}</div>
                        <img src={sunset} width='300' height='200' />
                    </div>
                </div>               
        </h1>
    );
}