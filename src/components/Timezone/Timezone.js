import React from 'react'
import {useSelector} from "react-redux"
export default function Timezone() {
  const {timezone} = useSelector(state => state.now.dataWeather)
  return (
    <div>timezone: {timezone}</div>
  )
}
