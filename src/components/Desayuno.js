import React, {Component} from "react";
import Table from "./Table";
import Order from "./Order";
import Button from "./Button";
import data from "./../data"

class Desayuno extends Component {
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
                          <th scope="row">cafe americano</th>
                          <td>$5</td>
                          <Button />
                        </tr>
                        <tr>
                          <th scope="row">cafe con leche</th>
                          <td>$10</td>
                          <Button />
                        </tr>
                        <tr>
                          <th scope="row">sandwich</th>
                          <td>$15</td>
                          <Button />
                        </tr>
                        <tr>
                          <th scope="row">Jugo</th>
                          <td>$13</td>
                          <Button />
                        </tr>
                      </tbody>
                    </table>
              </div>
          </div>
          <Order />
        </div>
        
     )
   }
 }
 
 export default Desayuno;
