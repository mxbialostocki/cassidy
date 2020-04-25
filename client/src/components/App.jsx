import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

// component imports
import Main from './Main'
import Daemon from './Daemon'

// add <Landing />
const App = () => {
  return (
    <Container fluid textAlign="center">
      <Header as="h1" textAlign="center">what should i read</Header>
      <Switch>
        <Route exact path='/main' component={Main} />
        <Route exact path='/daemon' component={Daemon} />
      </Switch>
    </Container>

  )
}

export default App
