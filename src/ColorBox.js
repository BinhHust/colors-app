import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

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
    const {color} = this.props;
    const {copied} = this.state;

    return (
      <CopyToClipboard text={color.name} onCopy={this.handleChangeStateCopy}>
        <div className="ColorBox" style={{backgroundColor: color.hex}}>
          <div 
            className={`ColorBox__overlay ${copied && 'show'}`} 
            style={{backgroundColor: color.hex}}
          ></div>
          <div
            className={`ColorBox__overlay-copy ${copied && 'show'}`}
          >
            <span className='ColorBox__overlay-text'>Copied !</span>
            <span className='ColorBox__overlay-textColor'>{color.name}</span>
          </div>
          <div className="ColorBox__container-copy">
            <button className="ColorBox__button-copy">Copy</button>
            <span className="ColorBox__content-copy">{color.name}</span>
          </div>
          <span className="ColorBox__see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
 
export default ColorBox;

