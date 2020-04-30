import React from 'react'
import { Grid } from '@material-ui/core'

import Review from './Review'

const ReviewDisplayFrame = ({ records }) => {

  const randomTitle = Math.floor(Math.random() * records.length)

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center" >
        <Review record={records[randomTitle]}/>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
