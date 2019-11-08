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
        <div className="ColorBox__container-copy">
          <button className="ColorBox__button-copy">Copy</button>
          <span className="ColorBox__content-copy">{background.name}</span>
        </div>
        <span className="ColorBox__see-more">More</span>
      </div>
    );
  }
}
 
export default ColorBox;