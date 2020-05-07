const typography = {

  fontFamily: [
    'Fira Code',
    'Arial',
    'sans-serif'
  ].join(','),
  h1: {
    fontSize: '8em',
    fontWeight: '800'
  },
  h2: {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem'
    }
  },
  h3: {
    fontSize: '1.5em'
  },
  h4: {
    fontSize: '1em'
  }
}

export default typography
