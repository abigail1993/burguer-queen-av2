import React, {Component} from "react";
import Row from "./Row";
import Button from "./Button";

class Table extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
    render(){
        return (<table className="table App-table-bordered">
        <thead>
          <tr>
            <th scope="row">Producto</th>
            <td>$5</td>
              <Button click={this.props.clicked} />
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
 