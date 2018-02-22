import React from 'react';
import Display from './Display';
import ButtonFrame from './ButtonFrame';
import format from '../format';
import calculator from '../calculator.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(format(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <img src={calculator} className="Calc-logo" alt="logo" />
        <div className = "title-text">
        React Calculator
        </div>
        <div className="component-parts">
          <Display
            value={this.state.next || this.state.total || '0'}
          />
          <ButtonFrame
            clickHandler={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
export default App;
