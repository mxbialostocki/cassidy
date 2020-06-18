import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { QueryRenderer } from 'react-relay'
import environment from '../lib/environment'
import getRecordsQuery from '../graphql/queries/getRecords'
import { Grid, CircularProgress } from '@material-ui/core'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'

const App = () => {
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
              <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{ height: '100vh' }}>
                <CircularProgress size={'9rem'} style={{ color: '#000000' }}/>
              </Grid>
            )
          } else {
            const { records } = props
            return (
              <Switch>
                <Route exact path='/'>
                  <HomePage records={records} initial />
                </Route>
                <Route exact path='/daemon'>
                  <Daemon records={records} />
                </Route>
                <Route exact path='/:isbn'>
                  <HomePage records={records} initial={false} />
                </Route>
              </Switch>
            )
          }
        }}
      />
    </React.Fragment>
  )
}

export default App
