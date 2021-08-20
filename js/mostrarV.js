const parametros = new URLSearchParams(location.search);
const conten = document.querySelector('#mostrarDatos');


const nombre = parametros.get('nombre');
const apellidos = parametros.get('apellidos');
const telefono = parametros.get('telefono');
const email = parametros.get('email');
const cuarto = parametros.get('cuartos');
const baños = parametros.get('baños');
const carros = parametros.get('carros');
const desI = parametros.get('datos');
const pro = parametros.get('pro');
const cant = parametros.get('cantones');
const direccion = parametros.get('direccion');
const precio = parametros.get('precio');


function mostrarDatos() {
    conten.innerHTML = `
        <table class="table caption-top" style="margin-top: 100px; margin-bottom: 310px;">
            <caption>Datos enviados</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Cuartos</th>
                <th scope="col">Baños</th>
                <th scope="col">Carros</th>
                <th scope="col">Provincia</th>
                <th scope="col">Canton</th>
                <th scope="col">Dirección</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>${nombre}</td>
                <td>${apellidos}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>${cuarto}</td>
                <td>${baños}</td>
                <td>${carros}</td>
                <td>${pro}</td>
                <td>${cant}</td>
                <td>${direccion}</td>
                <td>${precio}</td>
              </tr>
            </tbody>
          </table>
        `;
}


mostrarDatos();
