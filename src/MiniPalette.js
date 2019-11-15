import {withStyles} from '@material-ui/styles';
import React from 'react';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const {classes, paletteName, id, emoji, colors} = props;
  const colorsBox = colors.map(color => (
    <div className={classes.color} key={color.name} style={{backgroundColor: color.color}}></div>
  ));

  return (
    <div className={classes.root} onClick={() => props.handleClick(id)}>
      <div className={classes.colorsBox}>
        {colorsBox}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);