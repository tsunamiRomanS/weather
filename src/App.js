import React from 'react';
import {Grid} from "semantic-ui-react";
import SearchWeather from "./components/SearchWeather/SearchWeather";
import Carusel from "./components/Carusel/Carusel";
import NavBtn from "./components/NavBtn/NavBtn";
export default function App() {
  return (
    <>
      <NavBtn />
      <SearchWeather />
      <Grid>
        <Carusel />
      </Grid>
    </>
  );
};