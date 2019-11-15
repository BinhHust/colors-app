import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider/lib/Slider';
import {withStyles} from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

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
    const {level, handleChangeLevel, showingAllLevel, classes} = this.props;
    const {format, open} = this.state;
    return (
      <div className={classes.Navbar}>
        <div className={classes.logo}>
          <Link className={classes.link} to='/'>reactcolorpicker</Link>
        </div>
        {showingAllLevel && (
          <div className={classes.slider}>
            <span>Level: {level}</span>
            <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={handleChangeLevel}
            />
        </div>
        )}
        <div className={classes.select}>
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
            <IconButton 
              onClick={this.closeSnackbar}
              color="inherit"
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
 
export default withStyles(styles)(Navbar);