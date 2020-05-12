import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Grid, CircularProgress } from '@material-ui/core'
import environment from '../environment'
import getRecordsQuery from '../graphql/queries/getRecords'

// component imports
import ReviewDisplayFrame from './ReviewDisplayFrame'

const Main = () => {
  return (
    <React.Fragment>
      <QueryRenderer
        environment={environment}
        query={getRecordsQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log({ error })
            return <div>`eerrr0r`</div>
          }
          if (!props) {
            return (
              <CircularProgress size={'9rem'} style={{ color: '#000000' }}/>
            )
          }
          return (
            <Grid container direction="row" justify="center" alignItems="center">
              <ReviewDisplayFrame {...props} />
            </Grid>
          )
        }}
      />
    </React.Fragment>
  )
}

export default Main
