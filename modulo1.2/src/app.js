'use strict';

import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 2,
    };
  }

  render() {
    return (
      <div>
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default App;
