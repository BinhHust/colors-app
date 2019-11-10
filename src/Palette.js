import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  handleChangeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({format: val})
  }

  render() { 
    const {paletteName, id, emoji, colors} = this.props.palette;
    const {level, format} = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox color={color} key={color.name} format={format}/>
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleChangeLevel={this.handleChangeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    );
  }
}
 
export default Palette;

/*
- Palette 
  - Navbar : level
    - Slider
  - ColorBox (s) : copied
    - CopyToClipboard
*/