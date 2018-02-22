import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonFrame.css';

class ButtonFrame extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} blue wide />
          <Button name="sqrt" clickHandler={this.handleClick} operation />
          <Button name="x" clickHandler={this.handleClick} operation />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="/" clickHandler={this.handleClick} operation />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} operation />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} operation/>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
ButtonFrame.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonFrame;
