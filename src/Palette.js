import React, { Component } from 'react';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {paletteName, id, emoji, colors} = this.props;
    return (
      <div className="Palette">
        <h1>{emoji}</h1>
      </div>
    );
  }
}
 
export default Palette;