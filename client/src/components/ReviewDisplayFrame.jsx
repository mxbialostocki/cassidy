import React, { useState } from 'react'
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
  const [activeTitle, setActiveTitle] = useState()

  const randomTitle = () => {
    const randomIndex = Math.floor(Math.random() * records.length)
    console.log('checjk one', records[randomIndex])
    console.log('checjk two', records[randomIndex].isbn)
    return records[randomIndex].isbn
  }

  const navigateToRandomTitle = () => {
    const randomISBN = randomTitle()
    history.push(`/${randomISBN}`)
    // setTitlesByDetermination(randomISBN)
  }

  const titleISBN = isbn || randomTitle()

  // const [titlesByDetermination, setTitlesByDetermination] = useState(titleISBN)
  const variables = { isbn: titleISBN }
  // fetchQuery(environment, getRecordByISBNQuery, variables).then((record) => {
  //   console.log("i tried to refetch")
  //   setActiveTitle(record)
  // })
  // console.log(activeTitle)
  return (
    <React.Fragment>
      <QueryRenderer
        environment={environment}
        query={getRecordByISBNQuery}
        variables={{ isbn: titleISBN }}
        render={({ error, props }) => {
          console.log(props)
          console.log(error)
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            const { record } = props
            return (
              <Grid container spacing={2} direction="column" justify="center" alignItems="center" className={styles.reviewDisplayFrame}>
                <Grid item>
                  <Review record={record} />
                </Grid>
                <Grid item style={{ width: '100%', margin: '20px 0' }}>
                  <Button variant='outlined' fullWidth={true} onClick={() => navigateToRandomTitle()}>
                    <Typography variant="h3" >not this one</Typography>
                  </Button>
                </Grid>
              </Grid>
            )
          }
          return <div>Loading</div>
        }
        }
      />
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
