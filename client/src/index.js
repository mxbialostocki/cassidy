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
    ].join(','),
    h1: {
      fontSize: '8em',
      fontWeight: '800'
    },
    h2: {
      fontSize: '3rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem'
      }
    },
    h3: {
      fontSize: '1.5em'
    },
    h4: {
      fontSize: '1em'
    }
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
