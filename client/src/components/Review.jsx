import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'

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
      <Grid container className={styles.container} justify="center">
        <Grid item className={styles.jacketContainer}>
          <img className={styles.jacket} src={jacketPath} />
        </Grid>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start" className={styles.reviewContainer}>
          <Grid item>
            <Typography variant="h2" className={styles.heading}>{reviewSlug}</Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item>
            <Typography className={styles.title}>{title} by {authorFirst} {authorLast}</Typography>
          </Grid>
          <Grid item>
            <Typography>{imprint === 'null' ? null : imprint + ', '}{publisher} ({publicationYear})</Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item>
            <Typography variant="h4" className={styles.body}>{reviewBody}</Typography>
          </Grid>
          <Grid item>
            <Typography>review by {reviewReviewerName}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Review
