import React, {useEffect} from 'react'
import {Grid, Header} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {selectWeather} from "../../store/slices/day5hour3/day5hour3";
import styled from "styled-components";
const Content = styled.p`
font-size: 18px;
font-weight: 100;
line-height: 10px;
color: white;`
export default function Main() {
  const dispatch = useDispatch();
  const {day5hour3} = useSelector(state => state)
  useEffect(() => {
    if (day5hour3.dataWeather.list) {
      if (!day5hour3.selectWeather) {
        dispatch(selectWeather(day5hour3.dataWeather.list[0]))
      }
    }
  }, [day5hour3])
  if (day5hour3.selectWeather) {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as={"h2"} inverted>{day5hour3.selectWeather.dt_txt}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Header as={"h1"} inverted>
              <Header.Content>{Number(Math.round(day5hour3.selectWeather.main.temp - 273))}&deg;</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="right">
            <Header as={"h2"} inverted>
              Max&nbsp;&nbsp;
              <Header.Content>
                {Number(Math.round(day5hour3.selectWeather.main.temp_max - 273))}&deg;
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as={"h2"} inverted>
              Min&nbsp;&nbsp;
              <Header.Content>
                {Number(Math.round(day5hour3.selectWeather.main.temp_min - 273))}&deg;
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as={"h3"} inverted>
              {day5hour3.selectWeather.weather[0].description}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={5}>
          <Grid.Column>
            <Header as={"h3"} inverted content="Wind" />
            <Content>speed:&nbsp;&nbsp;{day5hour3.selectWeather.wind.speed}</Content>
            <Content>deg:&nbsp;&nbsp;{day5hour3.selectWeather.wind.deg}</Content>
            <Content>gust:&nbsp;&nbsp;{day5hour3.selectWeather.wind.gust}</Content>
          </Grid.Column>
          <Grid.Column>
            <Header as={"h3"} inverted content="Weather" />
            <Content>pressure:&nbsp;&nbsp;{day5hour3.selectWeather.main.pressure}</Content>
            <Content>type:&nbsp;&nbsp;{day5hour3.selectWeather.weather[0].main}</Content>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
};