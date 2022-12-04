import React from 'react'
import {useSelector} from "react-redux"
export default function HumidityAndPressure() {
  const {humidity, pressure} = useSelector(state => state.now.dataWeather.main)
  return (
    <>
      <div>humidity: {humidity}</div>
      <div>pressure: {pressure}</div>
    </>
  )
}
