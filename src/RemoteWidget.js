'use strict';

import React from 'react';

export default class RemoteWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked this.';
    }

    return (
      <button onClick={() => this.setState({ clicked: true }) }>
        Go
      </button>
    );
  }
}
