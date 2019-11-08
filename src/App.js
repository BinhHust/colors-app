import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}
 
export default App;