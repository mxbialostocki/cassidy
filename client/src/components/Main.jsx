import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Loader } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import environment from '../environment'
import getRecordsQuery from '../graphql/queries/getRecords'

// component imports
import ReviewDisplayFrame from './ReviewDisplayFrame'

const style = {
  width: '60vw'
}

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
              <Loader active inline="centered" />
            )
          }
          return (
            <Grid container direction="row" justify="center" alignItems="center" style={style}>
              <ReviewDisplayFrame {...props} />
            </Grid>
          )
        }}
      />
    </React.Fragment>
  )
}

export default Main
