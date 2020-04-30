import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import Landing from './Landing'
import Main from './Main'

const HomePage = () => {
  const style = {
    padding: '50px',
    width: '100vw',
    height: '100vh'
  }
  const [ isInitialLoad, setIsInitialLoad ] = useState(true)  
  const activePage = isInitialLoad ? <Landing clickHandler={setIsInitialLoad}/> : <Main />
  return (
    <Grid container direction="column" justify="center" alignItems="center" style={style}>
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default HomePage
