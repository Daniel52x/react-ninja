'use strict';

import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
    this.timer;
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps - timer', this.props, nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate - timer', nextProps, nextState);
    return this.state.timer !== nextState.time;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate - timer', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate - timer', this.props, prevProps);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log('render timer');
    return <div>Timer: {this.state.timer}</div>;
  }
}

export default Timer;
