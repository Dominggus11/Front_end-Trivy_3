import React, { Component } from "react";
import Child from "./Child";
import Child2 from "./child2";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stok: 100,
    };
  }

  BeliProduk = (Jumlah) => {
    this.setState({
      stok: this.state.stok - Jumlah,
    });
  };
  render() {
    return (
      <div>
        <Child stok={this.state.stok} fungsi={this.BeliProduk.bind(this)} />
        <Child2 stok={this.state.stok} fungsi={this.BeliProduk.bind(this)} />
      </div>
    );
  }
}
export default Parent;
