import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  jacketContainer: {
    width: '30%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '28px 0px'
    }
  },
  reviewContainer: {
    width: '70%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  jacket: {
    width: '100%',
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none'
    }
  },
  heading: {
    fontSize: '3rem',
    lineHeight: '1.1em'
  },
  title: {
    fontSize: '2em'
  },
  body: {
    fontSize: '1.2em'
  },
  reviewDisplayFrame: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      padding: '15px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      padding: '15px'
    },
    btn: {
      fontSize: '2em',
      width: '100%'
    }
  },
  homePage: {
    padding: '50px',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  landing: {
    cursor: 'pointer',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignContent: 'center',
    welcome: {
      textAlign: 'center'
    }
  }
}))

export default useStyles
