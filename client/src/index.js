import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.jsx'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Fira Code',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
