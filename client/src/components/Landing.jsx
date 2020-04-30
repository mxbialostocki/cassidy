import React from 'react'

import { Typography } from '@material-ui/core'

const Landing = ({ clickHandler }) => {
  const style = {
    body: {
      cursor: 'pointer'
    },
    welcome: {
      textAlign: 'center'
    }
  }
  return (
    <React.Fragment>
      <div role='button' style={style.body} onClick={() => clickHandler()}>
        <Typography variant='h1' style={style.welcome} gutterBottom fontWeight="800" >what should i read</Typography>
        <div style={{ display: 'none', lineHeight: '0' }}>ghosty</div>
      </div>
    </React.Fragment>
  )
}

export default Landing
