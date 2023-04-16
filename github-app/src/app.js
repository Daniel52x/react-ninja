'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: 'Daniel',
        photo: 'https://avatars.githubusercontent.com/u/32081901?v=4',
        login: 'daniel52x',
        repos: 12,
        followers: 10,
        following: 10,
      },
      repos: [{ link: '#', name: 'Nome do repositório' }],
      starred: [{ link: '#', name: 'Nome do repositório' }],
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
