import React from 'react'
export default function Temp(props) {
  const propsStrName = props.name
  return (
    <div>
      <span>{String(props.name).slice(5)}&nbsp;&nbsp;</span>
      <span>{Math.round(props.temp) - 273}&deg;</span>
    </div>
  )
};
