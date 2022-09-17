import React, { Component } from "react";
import { Alert, UncontrolledAlert, Button } from "reactstrap";

class BootstrapCOmp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Alert clolor="primary">Primary Alert</Alert>
        <Alert color="warning">Warning Alert</Alert>
        <Alert color="danger">Danger ALert</Alert>
        <Alert color="info">Info Alert</Alert>
        <Alert>What</Alert>
        <UncontrolledAlert color="info">Alert</UncontrolledAlert>
        <Button color="primary">Primary</Button>
        {' '}
        <Button color="primary">Primary</Button>
        <p>Hello Botstrap</p> 
      </div>
    );
  }
}
export default BootstrapCOmp;
