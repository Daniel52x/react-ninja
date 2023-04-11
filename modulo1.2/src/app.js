'use strict';

import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Valor incial',
    };
  }
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => {
              this.setState({
                value: e.target.value,
              });
            }}
          />
        </form>
      </div>
    );
  }
}

export default App;
