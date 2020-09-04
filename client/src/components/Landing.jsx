import React from 'react'
import { Typography, Grid, Hidden } from '@material-ui/core'

import useStyles from '../lib/custom'

const Landing = ({ clickHandler }) => {
  const { landing, landingHero } = useStyles()
  return (
    <React.Fragment>
      <Grid container justify='center' alignContent='center' className={landing}>
        <Grid item xs={10} role='button' onClick={() => clickHandler()}>
          <Typography variant='h1' className={landingHero}>what should i read</Typography>
          <Hidden xlDown>this page is full of ghosts</Hidden>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Landing
