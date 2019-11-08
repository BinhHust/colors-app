import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {paletteName, id, emoji, colors} = this.props;
    const colorBoxes = colors.map(color => (
      <ColorBox background={color} key={color.name}/>
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    );
  }
}
 
export default Palette;

/*
-Palette
 -ColorBox (s)
*/