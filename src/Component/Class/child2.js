import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    Jumlah = 1;
  render() {
    return (
      <div>
        <h2>Child Komponen 2</h2>
        Stok Produk : {this.props.stok}
        <br></br>
        <button onClick={()=>this.props.fungsi(this.Jumlah)}>Beli</button>
      </div>
    )
  }
}
