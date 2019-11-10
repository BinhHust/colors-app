import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    }

    this.handleChangeFormat = this.handleChangeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChangeFormat(e) {
    this.setState({format: e.target.value, open: true});
    this.props.changeFormat(e.target.value);
  }

  closeSnackbar() {
    this.setState({open: false})
  }

  render() { 
    const {level, handleChangeLevel} = this.props;
    const {format, open} = this.state;
    return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <a className="Navbar__link">reactcolorpicker</a>
        </div>
        <div className="Navbar__slider">
          <span>Level: {level}</span>
          <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleChangeLevel}
          />
        </div>
        <div className="Navbar__select">
          <Select value={format} onChange={this.handleChangeFormat}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{vertical: "bottom", horizontal: "left"}}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Change Format To {format.toUpperCase()}</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton>
              <CloseIcon
                onClick={this.closeSnackbar}
                color="inherit"
                key='close'
                aria-label='close'
              ></CloseIcon>
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
 
export default Navbar;