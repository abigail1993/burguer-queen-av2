import React, {Component} from "react";
import Order from "./Order";
import Button from "./Button";
import data from "./../data"


class Desayuno extends Component {
  constructor (){
    super()
    this.addCount = this.addCount.bind(this)
  }


    render(){
      
        return (<div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="App-background-titulo">
                    <h2 className="App-titulo">{data.Titles[0]}</h2>
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
                        <th scope="row" dataname={data.Desayuno[0].alimento}>{data.Desayuno[0].alimento}</th>
                        <td data-name={data.Desayuno[0].precio}>${data.Desayuno[0].precio}</td>
                        <button type="button" className="btn btn-success" onClick={ () => {this.addCount()}}>Agregar</button>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="0"/>
                        <button type="button" className="btn btn-danger" onClick={this.removeProduct}>Quitar</button>
                      </tr>
                      <tr>
                        <th scope="row" dataname={data.Desayuno[1].alimento}>{data.Desayuno[1].alimento}</th>
                          <td data-name={data.Desayuno[1].precio}>${data.Desayuno[1].precio}</td>
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row" dataname={data.Desayuno[2].alimento}>{data.Desayuno[2].alimento}</th>
                          <td data-name={data.Desayuno[2].precio}>${data.Desayuno[2].precio}</td>
                          <td><Button /></td>
                        </tr> 
                        <tr>
                          <th scope="row" dataname={data.Desayuno[3].alimento}>{data.Desayuno[3].alimento}</th>
                          <td data-name={data.Desayuno[3].precio}>${data.Desayuno[3].precio}</td>
                          <td><Button /></td>
                        </tr>
                     </tbody>
                    </table>
              </div>
              <Order />

          </div>
        </div>
        
     )
     
   };
   addCount = (props) => {
    /*let initialState = { product: 0}
      let newState;
          newState = { //creando nuevo objeto para no mutar el estado
              product: product.count + 1
    
   }*/
   console.log("algo pasa???", this.props.product)
 }
  };
 
 export default Desayuno;
