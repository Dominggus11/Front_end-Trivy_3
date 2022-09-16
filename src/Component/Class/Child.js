import React, { Component } from 'react'


class Child extends Component {
    constructor(props) {

        super(props)
        this.state = {

        }
    }
    minBeli = 3;
  render() {
    return (
      <div>
        <p>Child Komponent</p>
        <p>Stok Produk : {this.props.stok}</p> 
        <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
      </div>
    )
  }
}

export default Child;
