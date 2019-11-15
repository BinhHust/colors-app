import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/FooterPaletteStyles';

function FooterPalette(props) {
  const {paletteName, emoji, classes} = props;
  return (
    <div className={classes.paletteFooter}>
      {paletteName}
      <span>{emoji}</span>
    </div>
  );
}

export default withStyles(styles)(FooterPalette);