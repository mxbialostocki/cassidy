import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'

// component imports
import ReviewDisplayFrame from './ReviewDisplayFrame'

const Main = ({ records }) => {
  let { isbn } = useParams()
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <ReviewDisplayFrame records={records} isbn={isbn} />
      </Grid>
    </React.Fragment>
  )
}

export default Main
