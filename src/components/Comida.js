import React, {Component} from "react";
import Order from "./Order";
import Button from "./Button";
import data from "./../data"


class Comida extends Component {
  constructor (product){
    super(product)
    console.log(product)
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
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[0].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[1].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[2].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><Button /></td>
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
                          <th scope="row">{data.Comida.Extras[0].alimento}</th>
                          <td>${data.Comida.Extras[0].precio}</td>
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Extras[1].alimento}</th>
                          <td>${data.Comida.Extras[0].precio}</td>
                          <td><Button /></td>
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

                          <th scope="row">{data.Comida.Complementos[0].alimento}</th>
                          <td>$ {data.Comida.Complementos[0].precio}</td>
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Complementos[1].alimento}</th>
                          <td>$ {data.Comida.Complementos[1].precio}</td>
                          <td><Button /></td>
                        </tr>
                      </tbody>
                    </table>


                    <table className="table App-table-bordered">
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
                          <td><Button /></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Bebidas[1].alimento}</th>
                          <td>$ {data.Comida.Bebidas[1].precio}</td>
                          <td><Button /></td>
                        </tr>
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