import React from 'react'
import {useSelector} from "react-redux"
import {Grid, Header} from "semantic-ui-react";
export default function Coord() {
  const {coord, name} = useSelector(state => state.now.dataWeather)
  return (
    <Grid centered columns={2}>
      <Header as="h1">{name}</Header>
      <Grid.Row centered >
        <Grid.Column textAlign="right">
          <Header as="h4">latitude&nbsp;&nbsp;</Header>
          <span>{coord.lat}&deg;</span>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Header as="h4">longitude</Header>
          <span> {coord.lon}&deg;</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};