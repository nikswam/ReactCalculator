import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    
    const className = [
      "component-button",
      this.props.operation ? "operation" : "",
      this.props.blue ? "blue": "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div
        className={className.join(" ").trim()}
      >
        <button
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  operation: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
