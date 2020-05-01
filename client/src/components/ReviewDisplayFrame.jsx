import React, { useState } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import useStyle from '../custom'

import Review from './Review'

const ReviewDisplayFrame = ({ records }) => {
  const randomTitle = () => {
    return (
      Math.floor(Math.random() * records.length)
    )
  }
  const [titlesByDetermination, setTitlesByDetermination] = useState(randomTitle())
  const styles = useStyle()

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center" className={styles.reviewDisplayFrame}>
        <Review record={records[titlesByDetermination]}/>
        <Button sizing='large' onClick={() => setTitlesByDetermination(randomTitle())}>
          <Typography className={styles.reviewDisplayFrame.btn} >not this one</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
