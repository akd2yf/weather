import React from "react";
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
      gridTemplateColumns: "repeat(8, 1fr)",
      fontSize: 14,
    }
  });

export default function Daily ( {weather} ) {
    const styles = useStyles();
    let i = 0;

    return(
        <h1>
            <div className={styles.title}>Daily forecast:</div>
            <br/>
                <div className={styles.grid}>
                    {weather.map((day) =>
                    <Box border={1} padding={2}>Day {i+=1}
                        <div>Temp.:
                            <div>High: {day.temp.max} °F</div>
                            <div>Low: {day.temp.min} °F</div>
                        </div>
                        <div>Humidity: {day.humidity} %</div>
                        <div>Pressure: {day.pressure} hPa</div>
                    </Box>
                    )} 
                </div>           
        </h1>
    );
}