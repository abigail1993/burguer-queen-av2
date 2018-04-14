import React, {Component} from "react";

class Order extends Component {

  render(){
    return(<div className="col-md-4 col-sm-4">
      <div className="App-background-titulo">
        <h2 className="App-titulo">Pedido</h2>
      </div>

      <div className="App-pedido">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="">Cliente 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="">Cliente 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="">Cliente 3</a>
          </li>
        </ul>
      </div>

      <div className="App-total">
        <h4>TOTAL: $</h4>
      </div>
      
      <div>
        <button type="button" className="btn btn-danger">Generar Ticket</button>
      </div>
    </div>)
  }
 }
 
 export default Order;
 