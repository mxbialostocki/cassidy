import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from '../custom'
import Landing from './Landing'
import Main from './Main'

const HomePage = () => {
  const styles = useStyles()

  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const activePage = isInitialLoad ? <Landing clickHandler={setIsInitialLoad}/> : <Main />

  return (
    <Grid container direction="column" alignItems="center" className={styles.homePage}>
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default HomePage
