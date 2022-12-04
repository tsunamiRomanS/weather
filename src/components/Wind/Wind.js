import React from 'react'
import {useSelector} from "react-redux"
import {Header} from "semantic-ui-react"
export default function Wind() {
  const {wind} = useSelector(state => state.now.dataWeather)
  return (
    <>
      <Header as="h4">
        Wind
      </Header>
      <div>speed: {wind.speed}</div>
      {/* <div>gust: {wind.gust}</div> */}
    </>
  )
}
