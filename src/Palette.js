import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  handleChangeLevel(level) {
    this.setState({ level });
  }

  render() { 
    const {paletteName, id, emoji, colors} = this.props.palette;
    const {level} = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox color={color} key={color.name}/>
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleChangeLevel={this.handleChangeLevel}
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
-Palette
 -ColorBox (s)
*/