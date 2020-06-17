import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import typography from './lib/typography'

import App from './components/App.jsx'

// 1. this allows the font stack to be determined by Material-ui
const theme = createMuiTheme({
  typography
})

render(
  // 2. the theme (including the typography element) then wraps around the entry point.
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
