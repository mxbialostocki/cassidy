import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  jacket: {
    width: '100%',
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none'
    }
  },
  // these breakpoints are how Material-ui determines how the structure displays on different screen sizes
  reviewDisplayFrame: {
    width: '50%',
    [theme.breakpoints.down('xl')]: {
      width: '60%',
      padding: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  review: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '4rem'
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
    alignContent: 'center'
  },
  hidden: {
    display: 'none',
    lineHeight: '0'
  },
  daemonBtn: {
    marginTop: '2em',
    padding: '5px',
    width: '100%'
  },
  extend: {
    width: '100%'
  },
  not: {
    background: '#ffffff',
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      bottom: '0rem',
      zIndex: '10'
    }
  }
}))

export default useStyles
