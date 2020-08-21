import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from '../lib/custom'
import Landing from './Landing'
import Main from './Main'

const HomePage = ({ records, initial }) => {
  const styles = useStyles()

  const [ isInitialLoad, setIsInitialLoad ] = useState(initial)
  const activePage = isInitialLoad ? <Landing clickHandler={setIsInitialLoad}/> : <Main records={records}/>

  return (
    <Grid container direction="column" alignItems="center" className={styles.homePage}>
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default HomePage
