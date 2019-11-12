import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // #1: ele childrent la nn lam thay doi state trong parrent => goi func dc truyen tu cha, trong component con (argument: [chil] - par) 
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
      <ColorBox color={color} key={color.id} format={format}/>
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
        <div className="Palette__footer">
          {paletteName}
          <span>{emoji}</span>
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
    - Select
    - Snackbar
  - ColorBox (s) : copied
    - CopyToClipboard
*/