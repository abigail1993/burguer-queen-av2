import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data.js";
//import Button from "./Button.js"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import './App.css';
import Title from "./components/Title";
import Table from "./components/Table";
import Order from "./components/Order";
 
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
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
               <h1 className="App-logo">{data.nameRestaurant}</h1>
            </div>
          </div>
        </div>
      </section>
   );
  }
}
export default App;
