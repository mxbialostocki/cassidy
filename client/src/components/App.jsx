import React from 'react'
import Container from '@material-ui/core/Container'
import { Route, Switch } from 'react-router-dom'

// component imports
import HomePage from './HomePage'
import Daemon from './Daemon'

const App = () => {
  const bodyStyle = {
    padding: '50px'
  }
  return (
    <Container style={bodyStyle} textAlign="center">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/daemon' component={Daemon} />
      </Switch>
    </Container>

  )
}

export default App
