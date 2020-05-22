import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} initial={true} />} />
        <Route exact path='/:isbn' render={props => <HomePage {...props} initial={false} />} />
        <Route exact path='/daemon' component={Daemon} />
      </Switch>
    </React.Fragment>
  )
}

export default App
