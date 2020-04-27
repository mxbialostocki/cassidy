import React, { useState } from 'react'

import Landing from './Landing'
import Main from './Main'

const HomePage = () => {
  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const activePage = isInitialLoad ? <Landing clickHandler={setIsInitialLoad}/> : <Main />
  return activePage
}

export default HomePage
