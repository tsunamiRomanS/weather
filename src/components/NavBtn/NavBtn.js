import React, {useState} from 'react'
import {Button, ButtonGroup} from "semantic-ui-react"
export default function NavBtn() {
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  return (
    <Button.Group>
      <Button labelPosition='left' icon='left chevron' content='Previous day' disabled={prev} />
      <Button content='Now' />
      <Button labelPosition='right' icon='right chevron' content='Next day' disabled={next} />
    </Button.Group>
  )
}
