import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import data from "./Data.js";
//import Button from "./Button.js"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import './App.css';




 class App extends Component {
  render() {
    return (
      <section>
        <div className="App-container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
               <h1 className="App-logo">Burguer Queen</h1>
            </div>
          </div>
          <div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="App-background-titulo">
                    <h2 className="App-titulo">Desayuno</h2>
                  </div>
                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Cafe Americano</th>
                          <td>$ 5</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Cafe con leche</th>
                          <td>$ 7</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Sandwich de jamón y queso</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Jugo naturaL</th>
                          <td>$ 7</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                      </tbody>
                    </table>


              <div className="App-background-titulo">
                  <h2 className="App-titulo">Comida</h2>
                </div>

                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Hamburguesas</th>
                          <th scope="col">Precio Sencilla</th>
                          <th scope="col">Precio Doble</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Pollo</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Res</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Vegetariana</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                       </tbody>
                    </table>

                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Ingrediente Extra</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Huevo</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Queso</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Complementos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Papas Fritas</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Onion Rings</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Bebida</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Agua</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Gaseosa</th>
                          <td>$ 10</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>
            </div> 
             <div className="col-md-4 col-sm-4">
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
            </div> 
          </div> 
        </div> 
        </div> 
      </section>
   );
  }
}

export default App;