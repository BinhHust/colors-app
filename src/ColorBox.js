import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {background} = this.props;
    return (
      <div className="ColorBox" style={{backgroundColor: background.color}}>
        <span>{background.name}</span>
      </div>
    );
  }
}
 
export default ColorBox;