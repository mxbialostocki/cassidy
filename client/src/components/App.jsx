import React from 'react'
import { Grid } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'

const App = () => {
  const style = {
    padding: '50px',
    width: '100vw',
    height: '100vh'
  }
  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center" style={style}>
        <Grid item>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/daemon' component={Daemon} />
          </Switch>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default App
