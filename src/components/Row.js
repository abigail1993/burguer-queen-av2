import React, {Component} from "react";
import Button from "./Button.js"

 class Row extends Component { 
   render(){ 
    return(<tr>
        <th scope="row"></th>
        <td></td>
        <td><button type="button" className="btn btn-success">Agregar</button></td>
      </tr>)
    }
}
 
 export default Row;
 