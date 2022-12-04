import React from 'react';
import {useSelector} from "react-redux";
export default function Sys() {
  const {sunrise, sunset} = useSelector(state => state.now.dataWeather.sys)
  return (
    <>
      <div>sunrise: {sunrise}</div>
      <div>sunset: {sunset}</div>
    </>
  );
};