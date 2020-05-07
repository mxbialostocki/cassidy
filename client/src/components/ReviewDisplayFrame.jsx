import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
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
        <div role='button' width='100%' className={styles.reviewDisplayFrame.btn} onClick={() => setTitlesByDetermination(randomTitle())}>
          <Typography variant="h2" >not this one</Typography>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
