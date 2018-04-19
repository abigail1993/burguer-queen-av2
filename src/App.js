import React, { Component } from "react";
import data from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Desayuno from "./components/Desayuno";
import Comida from "./components/Comida";
import Inicio from "./components/Inicio";
import {Link, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pedido:[],
      desayuno:[{id: 1, alimento: "Café americano", precio: 5, cantidad: 0},
      { id: 2, alimento: "Café con leche", precio: 7, cantidad: 0 },
      { id: 3, alimento: "Sándwich de jamón y queso", precio: 10, cantidad: 0 },
      { id: 4, alimento: "Jugo natural", precio: 7, cantidad: 0 }], //data para componente de desayuno
      comida: [{ id: 5, alimento: "Pollo", precio: 10, cantidad: 0 },
      { id: 6, alimento: "Res", precio: 10, cantidad: 0 },
      { id: 7, alimento: "Vegetariana", precio: 10, cantidad: 0 },
      { id: 8, alimento: "Papas", precio: 5, cantidad: 0 },
      { id: 9, alimento: "Onion Rings", precio: 5, cantidad: 0 },
      { id: 10, alimento: "Agua", precio: 5, cantidad: 0 },
      { id: 11, alimento: "Gaseosa", precio: 7, cantidad: 0 },
      { id: 12, alimento: "Huevo", precio: 2, cantidad: 0 },
      { id: 13, alimento: "Queso", precio: 2, cantidad: 0 }]//data para componente de comida
    }
  }

  addProduct() {

    console.log("si entra")
   
  }
  
  render () {
    console.log(this.state.products);
    return (
      <section>
        <div className="App-container">
          <div className="row App-borde">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
              <h1 className="App-logo">{data.nameRestaurant}</h1>
              <Link className="" to="/Inicio">
              Inicio
              </Link>
            </div>
            <div className="col-md-5 ">
              <Link className="App-estilo" to="/Desayuno">
                Desayuno
              </Link>
            </div>
            <div className="col-md-5 ">
              <Link className="App-estilo" to="/Comida">
                Comida
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/Inicio" exact component={Inicio}></Route>
          <Route path="/Desayuno" exact component= {() => ( <Desayuno product={this.state.desayuno} />) } /> 
          <Route path="/Comida" exact component={() => ( <Comida product={this.state.comida} />) }></Route>
        </Switch>
      </section>
   );
  }
}
export default App;
