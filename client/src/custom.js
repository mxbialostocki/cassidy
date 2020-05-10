import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  jacket: {
    width: '100%',
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none'
    }
  },
  heading: {
    lineHeight: '2em'
  },
  title: {
    fontSize: '2em'
  },
  body: {
    lineHeight: '1.2em'
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
    }
  },
  homePage: {
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
  },
  hidden: {
    display: 'none',
    lineHeight: '0'
  }
}))

export default useStyles
