import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { QueryRenderer } from 'react-relay'
import environment from '../lib/environment'
import getRecordByISBNQuery from '../graphql/queries/getRecordByISBN'
import { Typography, Grid, Button, CircularProgress } from '@material-ui/core'

import useStyles from '../lib/custom'

import Review from './Review'

const ReviewDisplayFrame = ({ records, isbn }) => {
  const history = useHistory()
  const styles = useStyles()

  const randomTitle = () => {
    const randomIndex = Math.floor(Math.random() * records.length)
    return records[randomIndex].isbn
  }

  const navigateToRandomTitle = () => {
    const randomISBN = randomTitle()
    history.push(`/${randomISBN}`)
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  }

  const titleISBN = isbn || randomTitle()

  return (
    <React.Fragment>
      <QueryRenderer
        environment={environment}
        query={getRecordByISBNQuery}
        variables={{ isbn: titleISBN }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          }
          if (!props) {
            return (
              <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                <CircularProgress size={'9rem'} style={{ color: '#000000' }}/>
              </Grid>
            )
          } else if (props) {
            const { record } = props
            return (
              <Grid container spacing={2} direction="column" justify="center" alignItems="center" className={styles.reviewDisplayFrame}>
                <Grid item className={styles.review}>
                  <Review record={record} />
                </Grid>
                <Grid item className={styles.not}>
                  <Button variant='outlined' fullWidth={true} onClick={() => navigateToRandomTitle()}>
                    <Typography variant="h3" >not this one</Typography>
                  </Button>
                </Grid>
              </Grid>
            )
          }
        }
        }
      />
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
