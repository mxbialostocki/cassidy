import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import useStyles from '../custom'

const Review = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  // const thisRecord = {
  //   _id,
  //   isbn,
  //   determination
  // }
  const styles = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center">
        <Grid sm={12} md={4} item>
          <img className={styles.jacket} src={jacketPath} />
        </Grid>
        <Grid sm={12} md={8} item container spacing={2} direction="column" justify="flex-start" alignItems="flex-start" style={{ paddingLeft: '1em' }}>
          <Grid item>
            <Typography variant="h2">{reviewSlug}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">{title} by {authorFirst} {authorLast}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{imprint === 'null' ? null : imprint + ', '}{publisher} (ed.{publicationYear})</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" >{reviewBody}</Typography>
          </Grid>
          <Grid item className={styles.hidden}>
            <Typography variant="h5">review by {reviewReviewerName}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Review
