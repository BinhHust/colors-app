import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper';
import PaletteList from './PaletteList'; 
import SingleColorPalette from './SingleColorPalette';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  getPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    })
  }

  render() { 
    return (
      <div className="App">
        <Switch>
          <Route 
            exact 
            path="/"
            render={(routeProps) => <PaletteList seedColors={seedColors} {...routeProps} />}
          />
          <Route 
            exact
            path="/palette/:id"
            render={(routeProps) => <Palette palette={generatePalette(this.getPalette(routeProps.match.params.id))} />}
          />
          <Route 
            exact
            path="/palette/:paletteId/:id"
            render={(routeProps) => <SingleColorPalette
              palette={generatePalette(this.getPalette(routeProps.match.params.paletteId))} 
              colorId={routeProps.match.params.id}
            />}
          />
        </Switch>
      </div>
    );
  }
}
 
export default App;