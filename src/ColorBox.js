import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // #1: theo doi trang thai cua tung phan tu con (20 ptu nghia la co 20 bien nay - moi con la 1 bien)
      copied: false
    }

    this.handleChangeStateCopy = this.handleChangeStateCopy.bind(this);
  }

  handleChangeStateCopy() {
    this.setState({
      copied: true
    },() => setTimeout(() => {
      this.setState({copied: false})
    }, 1500))
  }

  render() { 
    const {color, format, moreUrl, showMore, classes} = this.props;
    const {copied} = this.state;

    return (
      <CopyToClipboard text={color[format]} onCopy={this.handleChangeStateCopy}>
        <div className={classes.colorBox} style={{backgroundColor: color[format]}}>
          <div 
            className={`${classes.overlay} ${copied && classes.showOverlay}`} 
            style={{backgroundColor: color[format]}}
          ></div>
          <div
            className={`${classes.overlayCopy} ${copied && classes.showOverlayCopy}`}
          >
            <span className={classes.overlayText}>Copied !</span>
            <span className={classes.overlayTextColor}>{color[format]}</span>
          </div>
          <div className="ColorBox__container-copy">
            <button className={classes.buttonCopy}>Copy</button>
            <span className={classes.contentCopy}>{color.name}</span>
          </div>
          {showMore && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
 
export default withStyles(styles)(ColorBox);

