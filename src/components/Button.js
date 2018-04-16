import React, {Component} from "react";
//import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';


class Button extends Component {
   // console.log("holaaaa")
   constructor (props) {
       super (props)
       //this.addProduct = this.addProduct.bind(this);
   }

   render(){
    return (<div>
        <button type="button" className="btn btn-success" onClick={this.props.click}>Agregar</button>
        <input type="password" className="form-control" id="inputPassword2" placeholder="0"/>
        <button type="button" className="btn btn-danger" onClick={this.removeProduct}>Quitar</button></div>)
 }
}

export default Button;
