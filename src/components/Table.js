import React, {Component} from "react";
import Row from "./Row";

class Table extends Component {
    render(){
        return (<table className="table App-table-bordered">
        <thead>
          <tr>
            <th scope="col">Productos</th>
            <th scope="col">Precio</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>

        )
  }
 }
 
 export default Table;
 