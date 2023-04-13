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
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
          onChange={(e) => {
            console.log('name', e.target.name);
            console.log('value', e.target.value);
          }}
        >
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
