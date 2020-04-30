import React from 'react'

import { Typography, Grid, Divider } from '@material-ui/core'

const Review = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  // const thisRecord = {
  //   _id,
  //   isbn,
  //   determination
  // }
  const style = {
    jacketContainer: {
      width: '30%',
      padding: '15px'
    },
    jacket: {
      width: '100%'
    },
    reviewContainer: {
      width: '70%',
      padding: '15px'
    },
    heading: {
      fontSize: '3rem',
      lineHeight: '1.1em'
    },
    title: {
      fontSize: '2em'
    },
    body: {
      fontSize: '1.2em'
    }
  }

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Grid item style={style.jacketContainer}>
          <img style={style.jacket} src={jacketPath} />
        </Grid>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start" style={style.reviewContainer}>
          <Grid item spacing={2}>
            <Typography variant='h1' style={style.heading}>{reviewSlug}</Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item spacing={2}>
            <Typography style={style.title}>{title} by {authorFirst} {authorLast}</Typography>
          </Grid>
          <Grid item spacing={2}>
            <Typography>{imprint === 'null' ? null : imprint + ', '}{publisher} ({publicationYear})</Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item spacing={2}>
            <Typography style={style.body}>{reviewBody}</Typography>
          </Grid>
          <Grid item spacing={2}>
            <Typography>review by {reviewReviewerName}</Typography>
          </Grid>

        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Review
