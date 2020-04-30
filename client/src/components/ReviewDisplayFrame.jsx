import React, { useState } from 'react'
import { Button, Typography, Grid } from '@material-ui/core'

import Review from './Review'

const ReviewDisplayFrame = ({ records }) => {
  const randomTitle = () => {
    return (
      Math.floor(Math.random() * records.length)
    )
  }
  const [titlesByDetermination, setTitlesByDetermination] = useState(randomTitle())

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center" >
        <Review record={records[titlesByDetermination]}/>
        <Button textSizeLarge onClick={() => setTitlesByDetermination(randomTitle())}>
          <Typography >not this one</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
