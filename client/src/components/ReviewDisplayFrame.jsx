import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, Button } from '@material-ui/core'

import useStyles from '../custom'

import Review from './Review'

const ReviewDisplayFrame = ({ records, isbn }) => {
  const history = useHistory()
  const styles = useStyles()

  const randomTitle = () => {
    return Math.floor(Math.random() * records.length)
  }
  const navigateToRandomTitle = () => {
    const randomIndex = randomTitle()
    history.push(`/${randomIndex}`)
    setTitlesByDetermination(randomIndex)
  }
  const title = isbn || randomTitle()
  const [titlesByDetermination, setTitlesByDetermination] = useState(title)

  return (
    <React.Fragment>
      <Grid container spacing={2} direction="column" justify="center" alignItems="center" className={styles.reviewDisplayFrame}>
        <Grid item>
          <Review record={records[titlesByDetermination]}/>
        </Grid>
        <Grid item style={{ width: '100%', margin: '20px 0' }}>
          <Button variant='outlined' fullWidth={true} onClick={() => navigateToRandomTitle()}>
            <Typography variant="h3" >not this one</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
