import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import Temp from "./Temp/Temp"
import HumidityAndPressure from "./HumidityAndPressure/HumidityAndPressure"
import {Grid, Header} from "semantic-ui-react"
export default function Main() {
  const main = useSelector(state => state.now.dataWeather.main)
  const [temps, setTemp] = useState([])
  useEffect(() => {
    for (const i in main) {
      if (i.match(/temp/g)) {
        const newel = {[i]: main[i]};
        setTemp((oldtemp) => [...oldtemp, newel])
      }
    }
  }, [])
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          {/* <Grid.Column> */}
          {/* <Header as="h4">Temp</Header> */}
          {/* </Grid.Column> */}
          {temps.map((i, indexI) => {
            return (
              <Grid.Column key={indexI} textAlign="center">
                <Temp name={Object.keys(i)} temp={Object.values(i)} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
      <HumidityAndPressure />
    </div>
  );
};