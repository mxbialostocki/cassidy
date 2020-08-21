import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

import useStyles from '../lib/custom'

const Review = ({ record }) => {
  if (!record) {
    return null
  }

  const { _id, isbn, title, author, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName } = record
  const { firstName, lastName } = author

  const styles = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center">
        <Grid xs={12} md={4} item>
          <img className={styles.jacket} src={jacketPath} />
        </Grid>
        <Grid xs={12} md={8} item container spacing={2} direction="column" justify="flex-start" alignItems="flex-start" style={{ paddingLeft: '1em' }}>
          <Grid item>
            <Typography variant="h2">{reviewSlug}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">{title} by {firstName} {lastName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{imprint === 'null' ? null : imprint + ', '}{publisher} (this ed.{publicationYear})</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              <ReactMarkdown linkTarget="_blank" source={reviewBody}/>
            </Typography>
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
