import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const {seedColors, classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.title}>React Color</nav>
          <div className={classes.colors}>
            {seedColors.map(palette => (
              <MiniPalette {...palette} key={palette.id} handleClick={this.handleClick} />
            ))};
          </div>
        </div>
      </div>
    );
  }
}
 
export default withStyles(styles)(PaletteList);