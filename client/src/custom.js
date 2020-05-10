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
    sm: '12',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '28px 0px',
      sm: '8'
    }
  },
  reviewContainer: {
    width: '70%',
    paddingLeft: '1em',
    sm: '12',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddlingLeft: '0',
      sm: '8'
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
    lineHeight: '2em'
  },
  title: {
    fontSize: '2em'
  },
  body: {
    lineHeight: '1.2em'
  },
  fullWidthBtn: {
    width: '100%',
    cursor: 'pointer',
    border: 'darkGray solid .5px',
    borderRadius: '6px',
    textAlign: 'center',
    margin: '16px'
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
