import React from 'react';
import {Header} from "semantic-ui-react";
import styled from "styled-components";
const Element = styled.div`
background-image: linear-gradient(
  45deg,
  hsl(298deg 96% 51%) 0%,
  hsl(276deg 100% 70%) 21%,
  hsl(234deg 100% 75%) 30%,
  hsl(201deg 100% 50%) 39%,
  hsl(195deg 100% 50%) 46%,
  hsl(191deg 100% 50%) 54%,
  hsl(187deg 100% 50%) 61%,
  hsl(185deg 100% 50%) 69%,
  hsl(182deg 100% 50%) 79%,
  hsl(179deg 100% 67%) 100%
);
width: 11vw;
border-radius: 20px;
text-align: center;
cursor: pointer;
`
export default function CaruselBotItem(props) {
  // if (props.dt_txt !== props.showItem.name) {
  return (
    <Element onClick={() => props.handleclick(String(props.dt_txt))}>
      <Header as={"h2"} inverted>{Math.round(props.temp - 273)}&nbsp;&deg;</Header>
      <Header as={"h4"} inverted>{String(props.dt_txt).match(/\d{2}:\d{2}:\d{2}/i)}</Header>
    </Element>
  )
};
// };