'use strict';

import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Valor incial',
      checked: false,
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
          <label>
            <input
              type="checkbox"
              value="my-checked"
              checked={this.state.checked}
              onChange={(e) => this.setState({ checked: e.target.checked })}
            />
            Checkbox
          </label>
        </form>
      </div>
    );
  }
}

export default App;
