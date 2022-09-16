import React from "react";
import "./CSS/Produk.css";

class Produk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stok:this.props.stok,
      sub:"beli",
      status:this.props.status,
      disabled:false
    }
  }

  ButtonBeli = () => {
    this.setState({
      stok:this.state.stok - 1
    })
    if(this.state.stok === 1){
        this.setState({
            status : "Habis",
            disabled : true
        })
    }
  }
  render() {
    return (
      <div className="box-stock">
        <img
          src="https://static.bmdstatic.com/pk/product/medium/600fc3ceaf5ae.jpg"
          alt="MackBook PRO"
        />
        <h2>{this.props.nama}</h2>
        <p>{this.props.harga}</p>
        <p>{this.state.stok}</p>
        <button
          className='btn-click'
          onClick={this.ButtonBeli}
          disabled={this.state.disabled}
        >
          BELI
        </button>
        <p>{this.state.status}</p>
      </div>
    )
  }
}

export default Produk;
