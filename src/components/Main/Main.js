import React from 'react'
import {Grid, Header} from "semantic-ui-react";
import styled from "styled-components";
const Content = styled.p`
font-size: 18px;
font-weight: 100;
line-height: 10px;
color: white;`
export default function Main(props) {
  // if (props) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as={"h2"} inverted>{props.dt_txt}</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <Header as={"h1"} inverted>
            <Header.Content>{Number(Math.round(props.main.temp - 273))}&deg;</Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column textAlign="right">
          <Header as={"h2"} inverted>
            Max&nbsp;&nbsp;
            <Header.Content>
              {Number(Math.round(props.main.temp_max - 273))}&deg;
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Header as={"h2"} inverted>
            Min&nbsp;&nbsp;
            <Header.Content>
              {Number(Math.round(props.main.temp_min - 273))}&deg;
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as={"h3"} inverted>
            {props.weather[0].description}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={5}>
        <Grid.Column>
          <Header as={"h3"} inverted content="Wind" />
          <Content>speed:&nbsp;&nbsp;{props.wind.speed}</Content>
          <Content>deg:&nbsp;&nbsp;{props.wind.deg}</Content>
          <Content>gust:&nbsp;&nbsp;{props.wind.gust}</Content>
        </Grid.Column>
        <Grid.Column>
          <Header as={"h3"} inverted content="Weather" />
          <Content>pressure:&nbsp;&nbsp;{props.main.pressure}</Content>
          <Content>type:&nbsp;&nbsp;{props.weather[0].main}</Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  // };
};