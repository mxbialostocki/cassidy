import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import useStyle from '../custom'

const Landing = ({ clickHandler }) => {
  const styles = useStyle()
  return (
    <React.Fragment>
      <Grid container className={styles.landing}>
        <div role='button' onClick={() => clickHandler()}>
          <Typography variant='h1' className={styles.landing.welcome}>what should i read</Typography>
          <div alt="this page is full of ghosts" style={{ display: 'none', lineHeight: '0' }}></div>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default Landing
