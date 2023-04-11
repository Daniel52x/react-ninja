'use strict';

import React from 'react';
import Button from './button';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>Clique em mim</Button>
      </div>
    );
  },
});

export default App;
