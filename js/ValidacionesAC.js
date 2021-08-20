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

const formulario = document.querySelector('.formulario');

///Nombre
const nombre = document.querySelector('#nombre');
const Nom = new RegExp('[a-zA-Z ]{2,254}');

////Telefono
const telefono = document.querySelector('#telefono');
const Tel = new RegExp('[0-9]{8}');

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

const ValidarForm = (e) => {
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
  }
}


nombre.addEventListener('input', (e) => ValidarForm(e));
telefono.addEventListener('input', (e) => ValidarForm(e));
email.addEventListener('input', (e) => ValidarForm(e));
apellidos.addEventListener('input', (e) => ValidarForm(e));
direccion.addEventListener('input', (e) => ValidarForm(e));
precio.addEventListener('input', (e) => ValidarForm(e));