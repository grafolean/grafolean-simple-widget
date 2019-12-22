import React from "react";

const RemoteComponent = props => {
  return <div>Hello Remote {props.name ? props.name : '...whatever it is...'}!</div>;
};

export default RemoteComponent;