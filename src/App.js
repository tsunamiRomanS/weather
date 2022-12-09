import React from 'react';
import {Grid} from "semantic-ui-react";
import SearchWeather from "./components/SearchWeather/SearchWeather";
import Carusel from "./components/Carusel/Carusel";
export default function App() {
  return (
    <>
      <SearchWeather />
      <Grid>
        <Carusel />
      </Grid>
    </ >
  );
};