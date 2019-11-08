import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {level, handleChangeLevel} = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <a className="Navbar__link">reactcolorpicker</a>
        </div>
        <div className="Navbar__slider">
          <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleChangeLevel}
          />
        </div>
      </div>
    );
  }
}
 
export default Navbar;