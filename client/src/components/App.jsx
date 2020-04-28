import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'

const App = () => {
  return (
    <Container fluid textAlign="center">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/daemon' component={Daemon} />
      </Switch>
    </Container>

  )
}

export default App
