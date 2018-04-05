import React, { Component } from "react";
//import ReactDOM from "react-dom";

import data from "./data.js";

//import Button from "./Button.js"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import './App.css';





 class App extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
               <h1 className="logo">{data.nameRestaurant}</h1>
            </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="background-titulo">
                    <h2 className="titulo">{data.Titles[0]}</h2>
                  </div>
                    <table className="table table-bordered">

                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <th scope="row">{data.Desayuno[0].alimento}</th>
                          <td>${data.Desayuno[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Desayuno[1].alimento}</th>
                          <td>${data.Desayuno[1].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Desayuno[2].alimento}</th>
                          <td>${data.Desayuno[2].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Desayuno[3].alimento}</th>
                          <td>{data.Desayuno[3].precio}</td>

                          <td><button type="button" className="btn btn-success">Agregar</button></td>
                        </tr>
                      </tbody>
                    </table>


              <div className="background-titulo">
                  <h2 className="titulo">{data.Titles[1]}</h2>
                </div>

                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Hamburguesa</th>

                          <th scope="col">Precio Sencilla</th>
                          <th scope="col">Precio Doble</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[0].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[1].proteina}</th>
                          <td>${data.Comida.Hamburguesas[1].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[2].proteina}</th>
                          <td>${data.Comida.Hamburguesas[2].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[2].precioDoble}</td>

                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                       </tbody>
                    </table>


                    <table className="table table-bordered">

                      <thead>
                        <tr>
                          <th scope="col">Ingrediente Extra</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Extras[0].alimento}</th>
                          <td>${data.Comida.Extras[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Extras[1].alimento}</th>
                          <td>${data.Comida.Extras[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>


                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Complementos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <th scope="row">{data.Comida.Complementos[0].alimento}</th>
                          <td>$ {data.Comida.Complementos[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Complementos[1].alimento}</th>
                          <td>$ {data.Comida.Complementos[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                      </tbody>
                    </table>


                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Bebidas</th>

                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <th scope="row">{data.Comida.Bebidas[0].alimento}</th>
                          <td>$ {data.Comida.Bebidas[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Bebidas[1].alimento}</th>
                          <td>$ {data.Comida.Bebidas[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>

            </div>
             <div className="col-md-4 col-sm-4">
                <div className="background-titulo">
                  <h2 className="titulo"></h2>
                </div>
                  <div className="pedclassNameo">

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

                <div className="total">

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
