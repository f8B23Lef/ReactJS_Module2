import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return React.createElement('div', {className: 'counter'},
      React.createElement('div', {}, `Count: ${this.state.count}`),
      React.createElement('button', {onClick: this.increment}, '+'),
      React.createElement('button', {onClick: this.decrement}, '-'),
    );
  }
}
