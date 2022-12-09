import React, {useEffect, useReducer} from 'react'
import {useSelector} from "react-redux";
import {Grid} from "semantic-ui-react"
import CaruselBotItem from "./CaruselBotItem/CaruselBotItem";
import Main from "../Main/Main"
import styled from "styled-components";
const MainWrapper = styled.div`
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
height: 70vh;
// width: 60vw;
border-radius: 20px;
`
export default function CaruselBox() {
  const data = useSelector(state => state.day5hour3.dataWeather.list)
  let q = false
  if (data) q = true
  function reducer(state, action) {
    switch (action.type) {
      case "click": {
        return {
          ...state,
          showItem: {
            name: action.payload.dt_txt, element: action.payload.element
          }
        }
      }
      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    showItem: {name: "", element: null},
  })
  function handleclick(dt_txt) {
    if (data) {
      data.forEach(element => {
        if (String(element.dt_txt).slice(8, 11) === String(new Date()).slice(8, 11)) {
          if (element.dt_txt === dt_txt) {
            dispatch({
              type: "click",
              payload: {dt_txt, element}
            })
          }
        }
      });
    }
  }
  return (
    <>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          {!state.showItem.name ?
            <MainWrapper />
            :
            <MainWrapper>
              <Main {...state.showItem.element} />
            </MainWrapper>
          }

        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={8}>
        {data ? data.map((element, elementIndex) => {
          if (String(element.dt_txt).slice(8, 11) === String(new Date()).slice(8, 11)) {
            return (
              <Grid.Column key={elementIndex}>
                <CaruselBotItem {...element.main} {...element}
                  showItem={state.showItem} handleclick={handleclick} />
              </Grid.Column>
            )
          };
        })
          : null}
      </Grid.Row>
    </>
  );
};