'use strict';

import React, { Component } from 'react';
import Scare from './scare';

class App extends Component {
  render() {
    return (
      <div
        className="container"
        data-id="1"
        onClick={(e) => {
          alert('clicou');
        }}
      >
        <Scare />
      </div>
    );
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className="container" data-id="1">
//         <Title name="Fernando" lastname="Daciuk" />
//       </div>
//     );
//   },
// });

export default App;
