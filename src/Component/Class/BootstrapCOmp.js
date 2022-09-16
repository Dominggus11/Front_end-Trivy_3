import React, { Component } from "react";
import { Alert } from "bootstrap";

export default class BootstrapCOmp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
      </div>
    );
  }
}
