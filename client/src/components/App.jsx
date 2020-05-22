import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'
import Main from './Main'

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/daemon' component={Daemon} />
        <Route path='/:isbn' component={Main} />
      </Switch>
    </React.Fragment>
  )
}

export default App
