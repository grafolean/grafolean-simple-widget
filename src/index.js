import React from "react";


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
    const { g: { components: { PersistentFetcher } } } = this.props;
    const { accountName } = this.state;

    return (
      <div>
        <PersistentFetcher resource="accounts/1" onUpdate={this.onAccountUpdate} />
        {accountName === null ? "Loading..." : `Hello ${accountName}` }
      </div>
    )
  }
}
