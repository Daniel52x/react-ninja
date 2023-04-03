'use strict';

import React, { Component } from 'react';
import Button from './button';
import LikeButton from './like-button';
import SearchButton from './search-button';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LikeButton />
        <SearchButton />
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
