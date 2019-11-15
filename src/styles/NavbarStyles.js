export default {
  Navbar: {
    display: 'flex',
    height: '6vh',
    alignItems: 'center',
  },
  
  logo: {
    padding: '1rem',
    backgroundColor: 'rgb(136, 141, 136)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  
  link: {
    color: '#fff',
    fontSize: '1.5rem',
    textDecoration: 'none'
  },
  
  slider: {
    width: '34rem',
    margin: '0 2rem',
    display: 'flex',
    alignItems: 'center',

    '& span': {
      flex: '20%',
      fontSize: '1.2rem',
      marginRight: '1rem',
    },

    "& .rc-slider-track": {
      backgroundColor: 'transparent',
    },

    "& .rc-slider-rail": {
      height: '.8rem',
    },

    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      backgroundColor: 'green',
      marginTop: '-3px',
      width: '1.3rem',
      height: '1.3rem',
    }
  },
  select: {
    marginLeft: 'auto',
    marginRight: '2rem',
  }
}