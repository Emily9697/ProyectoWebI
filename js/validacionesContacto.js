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
const correo = document.querySelector('#correo');
const Cor = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');




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
    case "telefono":
      if (!Tel.test(e.target.value)) {
        document.getElementById('telefono').classList.add('is-invalid');
        document.getElementById('telefono').classList.remove('is-valid');
      } else {
        document.getElementById('telefono').classList.add('is-valid');
        document.getElementById('telefono').classList.remove('is-invalid');
      }
      break;
    case "correo":
      if (!Cor.test(e.target.value)) {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('correo').classList.remove('is-valid');
      } else {
        document.getElementById('correo').classList.add('is-valid');
        document.getElementById('correo').classList.remove('is-invalid');
      }
      break;

  }
}

nombre.addEventListener('input', (e) => ValidarForm(e));
telefono.addEventListener('input', (e) => ValidarForm(e));
correo.addEventListener('input', (e) => ValidarForm(e));