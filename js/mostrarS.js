const parametros = new URLSearchParams(location.search);
const conten = document.querySelector('#mostrarDatosS');


const nombre = parametros.get('nombre');
const apellidos = parametros.get('apellidos');
const telefono = parametros.get('telefono');
const email = parametros.get('email');
const desI = parametros.get('datos');
const direccion = parametros.get('direccion');



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
                <th scope="col">Descripción</th>
                <th scope="col">dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>${nombre}</td>
                <td>${apellidos}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>${desI}</td>
                <td>${direccion}</td>
              </tr>
            </tbody>
          </table>
        `;
}


mostrarDatos();
