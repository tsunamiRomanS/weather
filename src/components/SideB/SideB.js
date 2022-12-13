import React, {useState} from 'react'
import {Icon, Sidebar} from "semantic-ui-react"
export default function SideB() {
  const [visibleSideBar, setVisibleSideBar] = useState(true);
  return (
    <>
      <Icon name="settings" size="massive" onClick={() => setVisibleSideBar(!visibleSideBar)} />
      <Sidebar.Pushable >
        <Sidebar visible={visibleSideBar}>
          <div>1</div>
          <div>2</div>
        </Sidebar>
      </Sidebar.Pushable>
    </>
  )
}
