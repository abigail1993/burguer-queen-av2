import React, {Component} from "react";
import Order from "./Order";
import Button from "./Button";
import data from "./../data"


class Comida extends Component {
  constructor (props){
    super(props)
  }


    render(){
      
        return (  <div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="App-background-titulo">
                    <h2 className="App-titulo">{data.Titles[1]}</h2>
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
                    {this.props.product.map((item)=>{
                        console.log(item)
                        return (
                          <tr>
                        <th scope="row">{item.alimento}</th>
                        <td>{item.precio}</td>
                        <button type="button" className="btn btn-success">Agregar</button>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="0"/>
                        <button type="button" className="btn btn-danger" onClick={this.removeProduct}>Quitar</button>
                      </tr>
                        )
                      })}
                       </tbody>
                    </table>
              </div>
              <Order />

          </div>
        </div>
          
        
     )
   }
 }
 
 export default Comida;