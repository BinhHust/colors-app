export default {
  root: {
    backgroundColor: '#fff',
    flex: '0 0 calc(33.3334% - 1.3334rem)',
    marginBottom: '2rem',
    padding: '.5rem',
    borderRadius: '3px',

    '&:not(:nth-child(3n))': {
      marginRight: '2rem',
    },

    '&:hover': {
      cursor: 'pointer'
    }
  },
  colorsBox: {
    height: '10rem',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap'
  },
  color: {
    flex: '0 0 20%',
    height: '25%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '.5rem',
    fontSize: '1.2rem',
    '& span': {
      fontSize: '1.3rem'
    }
  }
}