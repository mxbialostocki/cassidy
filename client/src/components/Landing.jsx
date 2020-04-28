import React from 'react'

import { Header } from 'semantic-ui-react'

const Landing = ({ clickHandler }) => {
  const bodyStyle = {
    height: '100vh',
    width: '100vw',
    cursor: 'pointer'
  }
  const headerStyle = {
    margin: '50vh 0'
  }
  return (
    <React.Fragment>
      <div role='button' style={bodyStyle} onClick={() => clickHandler()}>
        <Header as="h1" textAlign="center" style={headerStyle}>what should i read</Header>
        <div style={{ display: 'none' }}>ghosty</div>
      </div>
    </React.Fragment>
  )
}

export default Landing
