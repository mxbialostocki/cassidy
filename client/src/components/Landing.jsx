import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import useStyle from '../custom'

const Landing = ({ clickHandler }) => {
  const styles = useStyle()
  return (
    <React.Fragment>
      <Grid container className={styles.landing}>
        <div role='button' onClick={() => clickHandler()}>
          <Typography variant='h1' className={styles.landing.welcome} gutterBottom fontWeight="800" >what should i read</Typography>
          <div style={{ display: 'none', lineHeight: '0' }}>ghosty</div>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default Landing
