import React, {Component} from "react";
//import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';


class Button extends Component {
   // console.log("holaaaa")
   constructor () {
       super ()
       this.addProduct = this.addProduct.bind(this);
   }
    addProduct (event) {
        let products = this.setState.products
    }

   render(){
    return (<div>
        <button type="button" class="btn btn-success" onclick={this.addProduct}>Agregar</button>
        <input type="password" class="form-control" id="inputPassword2" placeholder="0"/>
        <button type="button" class="btn btn-danger" onclick={this.addProduct}>Quitar</button></div>)
 }
}

export default Button;
