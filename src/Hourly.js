import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    title: {
      color: 'black',
      fontSize: 32,
      textAlign: 'center'
    },
    grid: {
      display: "grid", 
      gridTemplateColumns: "repeat(12, 4fr)",
      fontSize: 14,
    }
  });

export default function Hourly ( {weather} ) {
    const styles = useStyles();
    let i = 0;

    return(
        <h1>
            <div className={styles.title}>Hourly forecast:</div>
            <br/>
                <div className={styles.grid}>
                    {weather.map((hour) =>
                    <Box border={1} padding={2}>Hour {i+=1}
                        <div>Temp.: {hour.temp} °F</div>
                        <div>Humidity: {hour.humidity} %</div>
                        <div>Pressure: {hour.pressure} hPa</div>
                    </Box>
                    )} 
                </div>           
        </h1>
    );
}