import React from 'react';
import {Grid, Container} from "semantic-ui-react";
import {useSelector} from "react-redux";
import Wind from "./components/Wind/Wind";
import SearchWeather from "./components/SearchWeather/SearchWeather";
import Main from "./components/Main/Main";
import Sys from "./components/Sys/Sys";
import Timezone from "./components/Timezone/Timezone"
import Coord from "./components/Coord/Coord";
export default function App() {
  const {dataWeather} = useSelector(state => state.now)
  return (
    <Container>
      <Grid centered columns={1}>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <SearchWeather />
          </Grid.Column>
        </Grid.Row>
        {
          dataWeather.length === 0 ? null :
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Coord />
                <Main />
                <Sys />
                <Wind />
                <Timezone />
              </Grid.Column>
            </Grid.Row>
        }
      </Grid>
    </Container >
  );
};
{/* <Icon name='settings' /> */}