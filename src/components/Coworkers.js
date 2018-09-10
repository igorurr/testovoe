import React, { Component } from "react";

import Coworker from "./Coworker";

class Coworkers extends Component {
  render() {
    return (
      <div id="Coworkers">
        {this.props.UserList.map(_Data => (
          <Coworker data={_Data} />
        ))}
      </div>
    );
  }
}

export default Coworkers;
