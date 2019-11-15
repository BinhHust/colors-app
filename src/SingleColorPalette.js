import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import FooterPalette from './FooterPalette'; 
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    };
    this._shades = this.gatherColor(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherColor(palette, colorId) {
    let shades = [];
    const colors = palette.colors;

    for(let level in colors) {
      shades = shades.concat(
        colors[level].filter(color => {
          return color.id === colorId;
        })
      )
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({format: val})
  }

  render() { 
    const {paletteName, id, emoji, colors} = this.props.palette;
    const {format} = this.state;
    const {classes} = this.props;

    const colorBoxes = this._shades.map(color => (
      <ColorBox 
        color={color} 
        key={color.name} 
        format={format}
        moreUrl={`/palette/${id}/${color.id}`}
        showMore={false}
      />
    ));

    return (
      <div className={`${classes.singleColorPalette} ${classes.palette}`}>
        <Navbar
          changeFormat={this.changeFormat}
          showingAllLevel={false}
        />
        <div className={classes.palettColors}>
          {colorBoxes}
          <div className={`${classes.colorBox} ${classes.goBack}`}>
            <Link to={`/palette/${id}`} className={classes.buttonBack}>
              Go Back
            </Link>
          </div>
        </div>
        <FooterPalette 
          paletteName={paletteName}
          emoji={emoji}
        />
      </div>
    );
  }
}
 
export default withStyles(styles)(SingleColorPalette);