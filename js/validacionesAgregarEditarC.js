// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


///Nombre
const nombre = document.querySelector('#nombre');
const Nom = new RegExp('[a-zA-Z ]{2,254}');

////Telefono
const telefono = document.querySelector('#telefono');
const Tel = new RegExp('^[0-9]{8}$');

////email
const email = document.querySelector('#email');
const Ema = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');

////apellidos
const apellidos = document.querySelector('#apellidos');
const Ape = new RegExp('[a-zA-Z ]{2,254}');

////direccion
const direccion = document.querySelector('#direccion');
const Direc = new RegExp('[a-zA-Z ]{2,950}');

////Telefono
const precio = document.querySelector('#precio');
const Pre = new RegExp('[0-9]{1}');

///Titulo
const titulo = document.querySelector('#titulo');
const Tit = new RegExp('[a-zA-Z ]{2,254}');

const validarForm = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (!Nom.test(e.target.value)) {
        document.getElementById('nombre').classList.add('is-invalid');
        document.getElementById('nombre').classList.remove('is-valid');
      } else {
        document.getElementById('nombre').classList.add('is-valid');
        document.getElementById('nombre').classList.remove('is-invalid');
      }
      break;
    case "apellidos":
      if (!Ape.test(e.target.value)) {
        document.getElementById('apellidos').classList.add('is-invalid');
        document.getElementById('apellidos').classList.remove('is-valid');
      } else {
        document.getElementById('apellidos').classList.add('is-valid');
        document.getElementById('apellidos').classList.remove('is-invalid');
      }
      break;
    case "telefono":
      if (!Tel.test(e.target.value)) {
        document.getElementById('telefono').classList.add('is-invalid');
        document.getElementById('telefono').classList.remove('is-valid');
      } else {
        document.getElementById('telefono').classList.add('is-valid');
        document.getElementById('telefono').classList.remove('is-invalid');
      }
      break;
    case "email":
      if (!Ema.test(e.target.value)) {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('email').classList.remove('is-valid');
      } else {
        document.getElementById('email').classList.add('is-valid');
        document.getElementById('email').classList.remove('is-invalid');
      }
      break;
    case "direccion":
      if (!Direc.test(e.target.value)) {
        document.getElementById('direccion').classList.add('is-invalid');
        document.getElementById('direccion').classList.remove('is-valid');
      } else {
        document.getElementById('direccion').classList.add('is-valid');
        document.getElementById('direccion').classList.remove('is-invalid');
      }
      break;
    case "precio":
      if (!Pre.test(e.target.value)) {
        document.getElementById('precio').classList.add('is-invalid');
        document.getElementById('precio').classList.remove('is-valid');
      } else {
        document.getElementById('precio').classList.add('is-valid');
        document.getElementById('precio').classList.remove('is-invalid');
      }
      break;
    case "titulo":
      if (!Tit.test(e.target.value)) {
        document.getElementById('titulo').classList.add('is-invalid');
        document.getElementById('titulo').classList.remove('is-valid');
      } else {
        document.getElementById('titulo').classList.add('is-valid');
        document.getElementById('titulo').classList.remove('is-invalid');
      }
      break;
  }
}



function mostrarCanton() {

  var provincias = document.querySelector('#provincia');
  var cantones = document.querySelector('#canton');
  cantones.innerHTML = "";

  if (provincias.value === "sanjose") {

    var cantonesP = ['San Jose', 'Acosta', 'Alajuelita', 'Aserr??', 'Curridabat', 'Desamparados', 'Dota', 'Escaz??',
      'Goicoechea', 'Le??n Cort??s', 'Montes de Oca', 'Mora',
      'Moravia', 'P??rez Zeled??n', 'Puriscal', 'Santa Ana',
      'Tarraz??', 'Tib??s', 'Turrubares', 'V??zquez de Coronado'
    ];

  } else if (provincias.value === "alajuela") {
    var cantonesP = ['Alajuela', 'Atenas', 'Grecia', 'Guatuso', 'Los Chiles', 'Naranjo', 'Orotina', 'Palmares', 'Po??s',
      'R??o Cuarto', 'San Carlos', 'San Mateo', 'San Ram??n', 'Sarch??', 'Upala', 'Zarcero'
    ];
  } else if (provincias.value === "cartago") {

    var cantonesP = ['Cartago', 'Alvarado', 'El Guarco', 'Jim??nez',
      'La Uni??n', 'Oreamuno', 'Para??so', 'Turrialba'
    ];

  } else if (provincias.value === "heredia") {

    var cantonesP = ['Heredia', 'Barva', 'Bel??n', 'Flores', 'San Isidro',
      'San Pablo', 'San Rafael', 'Santa B??rbara', 'Santo Domingo', 'Sarapiqu??'
    ];

  } else if (provincias.value === "guanacaste") {

    var cantonesP = ['Liberia', 'Abangares', 'Bagaces', 'Ca??as', 'Carrillo', 'Hojancha', 'La Cruz',
      'Nandayure', 'Nicoya', 'Santa Cruz', 'Tilar??n'
    ];
  } else if (provincias.value === "puntarenas") {

    var cantonesP = ['Puntarenas', 'Buenos Aires', 'Corredores', 'Coto Brus', 'Esparza', 'Garabito',
      'Golfito', 'Montes de Oro', 'Osa', 'Parrita', 'Quepos'
    ];
  } else if (provincias.value === "limon") {

    var cantonesP = ['Lim??n', 'Gu??cimo', 'Matina', 'Pococ??', 'Siquirres', 'Talamanca'];
  }

  for (var i = 0; i < cantonesP.length; i++) {
    const op = document.createElement('option');
    op.value = cantonesP[i];
    op.innerHTML = cantonesP[i];
    cantones.append(op);
  }
}

function alerta() {
  alert('Se ingreso correctamente la casa');
}

function alertaE() {
  alert('Se edito correctamente la casa');
}



nombre.addEventListener('input', (e) => validarForm(e));
telefono.addEventListener('input', (e) => validarForm(e));
email.addEventListener('input', (e) => validarForm(e));
apellidos.addEventListener('input', (e) => validarForm(e));
direccion.addEventListener('input', (e) => validarForm(e));
precio.addEventListener('input', (e) => validarForm(e));
titulo.addEventListener('input', (e) => validarForm(e));