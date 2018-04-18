import React, {Component} from "react";
import Button from "./Button.js"

 class Row extends Component { 
   render(){ 
    return(<tr>
        <th scope="row"></th>
        <td></td>
        <td><Button click={this.props.clicked} /></td>
      </tr>)
    }
}
 
 export default Row;
 