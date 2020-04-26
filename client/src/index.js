import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.jsx'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
