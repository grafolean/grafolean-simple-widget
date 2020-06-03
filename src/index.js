import React from "react";

import './index.scss';

export default class MyWidget extends React.Component {
  state = {
    accountName: null,
  }

  onAccountUpdate = json => {
    this.setState({
      accountName: json.name,
    })
  }

  render() {
    const { g: {
      components: { PersistentFetcher },
      urlParams: { accountId },
    } } = this.props;
    const { accountName } = this.state;

    return (
      <div className="plugin-my-widget">
        <PersistentFetcher resource={`accounts/${accountId}`} onUpdate={this.onAccountUpdate} />
        {accountName === null ? "Loading..." : `Hello ${accountName}` }
      </div>
    )
  }
}
