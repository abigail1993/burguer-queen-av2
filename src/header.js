class header extends React.Component {
  render() {
    return <section class="container-fluid">
        <div id="container">
            <div class="col-md-6 offset-md-3">
               <h1 id="logo">Burguer Queen</h1>
            </div>
            <div class="col-md-7">
                    <h1 id="titulo">Desayuno</h1>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Cafe Americano</th>
                          <td>$ 5</td>
                          <td><button type="button" class="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Cafe con leche</th>
                          <td>$ 7</td>
                          <td><button type="button" class="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Sandwich de jamón y queso</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Agregar</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Jugo naturaL</th>
                          <td>$ 7</td>
                          <td><button type="button" class="btn btn-success">Agregar</button></td>
                        </tr>
                      </tbody>
                    </table>


                  <div class="">
                    <h1 id="titulo">Comida</h1>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Hamburguesas</th>
                          <th scope="col">Precio Sencilla</th>
                          <th scope="col">Precio Doble</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Pollo</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" class="btn btn-success">Sencilla</button> <button type="button" class="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Res</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" class="btn btn-success">Sencilla</button> <button type="button" class="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">Vegetariana</th>
                          <td>$ 10</td>
                          <td>$ 15</td>
                          <td><button type="button" class="btn btn-success">Sencilla</button> <button type="button" class="btn btn-success">Doble</button></td>
                        </tr>
                       </tbody>
                    </table>

                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Ingrediente Extra</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Huevo</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Queso</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>

                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Complementos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Papas Fritas</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Sencilla</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Onion Rings</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Sencilla</button> </td>
                        </tr>
                      </tbody>
                    </table>

                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Bebida</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Agua</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">Gaseosa</th>
                          <td>$ 10</td>
                          <td><button type="button" class="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        </div>
    </div>
  </section>
  //  <h1>Hello, {this.props.name}</h1>;
  }
}
