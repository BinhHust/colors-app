import chroma from 'chroma-js';

export default {
  colorBox: {
    height: props => props.showMore ? "25%" : "50%",
    width: '20%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-5px',
    '&:hover button' : {
        opacity: "1"
    }
  },
  contentCopy: {
    color: props => {
      return chroma(props.color[props.format]).luminance() >= .1 ? "black" : "white";
    },
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: ".5rem",
    letterSpacing: "1px",
  },
  seeMore: {
    color: props => chroma(props.color[props.format]).luminance() >= .1 ? 'black' : 'white' ,
    position: 'absolute',
    right: '0',
    bottom: '0',
    background: 'rgba(255, 255, 255, 0.5)',
    width: '5rem',
    height: '3rem',
    lineHeight: '3rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'scale(.1)',
    zIndex: '0',
    opacity: '0',
    visibility: 'hidden',
    transition: 'transform .6s ease-in-out',
  },
  showOverlay: {
    zIndex: '10',
    transform: 'scale(50)',
    opacity: '1',
    visibility: 'visible',
  },
  overlayCopy: {
    color: props => chroma(props.color[props.format]).luminance() >= .1 ? 'black' : 'white' ,
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: '0',
    visibility: 'hidden',
    transform: 'scale(0)',
    transition: 'transform .4s ease-in-out',
    transitionDelay: '.3s',
  },
  showOverlayCopy: {
    zIndex: '25',
    opacity: '1',
    visibility: 'visible',
    transform: 'scale(1)',
  },
  buttonCopy: {
    color: props => chroma(props.color[props.format]).luminance() >= .1 ? 'black' : 'white' ,
    display: 'inline-block',
    outline: 'none',
    border: 'none',
    height: '3rem',
    width: '6rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    fontSize: '1.3rem',
    lineHeight: '3rem',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    transition: 'all .5s',
    textDecoration: 'none',
    opacity: "0"
  },
  overlayText: {
    width: '100%',
    textAlign: 'center',
    fontSize: '4rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '1rem',
    padding: '1rem',
  },
  overlayTextColor: {
    fontSize: '3rem'
  }
}