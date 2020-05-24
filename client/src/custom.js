import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  jacket: {
    width: '100%',
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none'
    }
  },
  reviewDisplayFrame: {
    width: '50%',
    [theme.breakpoints.down('lg')]: {
      width: '60%',
      padding: '15px'
    },
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
  }
}))

export default useStyles
