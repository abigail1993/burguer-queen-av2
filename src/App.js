import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Desayuno from "./components/Desayuno";
import Comida from "./components/Comida";
import Inicio from "./components/Inicio";

//import Title from "./components/Title";
//import Table from "./components/Table";
//import Order from "./components/Order";
import {Link, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(){
    super()
    this.state= {
      row: []
    }
  }

  componentWillMount(){
    //aqui talvez iria la data 

  }

  render () {
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
          <Route path="/Desayuno" exact component={Desayuno}></Route>
          <Route path="/Comida" exact component={Comida}></Route>

        </Switch>
      </section>
   );
  }
}
export default App;
