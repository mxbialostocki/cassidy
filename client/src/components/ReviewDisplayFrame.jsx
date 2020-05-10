import React, { useState } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'

import useStyles from '../custom'

import Review from './Review'

const ReviewDisplayFrame = ({ records }) => {
  const randomTitle = () => {
    return (
      Math.floor(Math.random() * records.length)
    )
  }
  const [titlesByDetermination, setTitlesByDetermination] = useState(randomTitle())
  const styles = useStyles()

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center" className={styles.reviewDisplayFrame}>
        <Review record={records[titlesByDetermination]}/>
        <Button variant='outlined' spacing={2} className={styles.fullWidthBtn} onClick={() => setTitlesByDetermination(randomTitle())}>
          <Typography variant="h2" >not this one</Typography>
        </Button>
        <div role='button' className={styles.fullWidthBtn} onClick={() => setTitlesByDetermination(randomTitle())}>
          <Typography variant="h2" >not this one</Typography>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
