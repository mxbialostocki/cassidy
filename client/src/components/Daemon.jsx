import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Grid, CircularProgress } from '@material-ui/core'
import environment from '../environment'
import getRecordsQuery from '../graphql/queries/getRecords'

// component imports
import CreateRecord from './CreateRecord'
import DisplayRecords from './DisplayRecords'

const Daemon = () => {
  return (
    <React.Fragment>
      <Grid container direction="column" justify="flex-start" alignItems="center" style={{ padding: '50px', width: '100vw', height: '100vh' }}>
        <Grid item>
          <CreateRecord />
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
                  <CircularProgress style={{ color: '#000000' }}/>
                )
              }
              return <DisplayRecords {...props} />
            }}
          />
        </Grid>
      </Grid>

    </React.Fragment>
  )
}

export default Daemon
