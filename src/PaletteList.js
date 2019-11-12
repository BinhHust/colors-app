import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    boxSizing: 'border-box',
    backgroundColor: 'blue',
    height: '100vh'
  },
  container: {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    margin: '1.5rem 0'
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    const {seedColors, classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.title}>React Color</nav>
          <div className={classes.colors}>
            {seedColors.map(palette => (
              <MiniPalette {...palette}/>
            ))};
          </div>
        </div>
      </div>
    );
  }
}
 
export default withStyles(styles)(PaletteList);