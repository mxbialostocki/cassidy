import React from 'react'

import { Typography } from '@material-ui/core'

const Landing = ({ clickHandler }) => {
  const style = {
    body: {
      height: '100vh',
      width: '100vw',
      cursor: 'pointer'
    },
    welcome: {
      textAlign: 'center'
    }
  }
  return (
    <React.Fragment>
      <div role='button' style={style.body} onClick={() => clickHandler()}>
        <Typography variant='h1' style={style.welcome} gutterBottom >what should i read</Typography>
        <div style={{ display: 'none' }}>ghosty</div>
      </div>
    </React.Fragment>
  )
}

export default Landing
