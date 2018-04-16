import React, {Component} from "react";
import Table from "./Table";
import Order from "./Order";
import Button from "./Button";
import data from "./../data"


class Desayuno extends Component {
  constructor (props){
    super(props)
  }

    render(){
      //console.log(this.props)
        return (<div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="App-background-titulo">
                    <h2 className="App-titulo">{data.Titles[0]}</h2>
                  </div>
                   <Table />
              </div>
          </div>
          <Order />
        </div>
        
     )
   }
 }
 
 export default Desayuno;
