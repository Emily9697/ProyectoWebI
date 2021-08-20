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

////Cedula
const nombreU = document.querySelector('#nombreU');
const NomU = new RegExp('(^[A-Za-z]{1,3}([0-9]{4})){1}');

////email
const email = document.querySelector('#email');
const Ema = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');

////contraseña
const contraseña = document.querySelector('#contraseña');
const Contra = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');

////contraseña
const confirmContraseña = document.querySelector('#confirmContraseña');
const ContraC = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');




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
    case "nombreU":
      if (!NomU.test(e.target.value)) {
        document.getElementById('nombreU').classList.add('is-invalid');
        document.getElementById('nombreU').classList.remove('is-valid');
      } else {
        document.getElementById('nombreU').classList.add('is-valid');
        document.getElementById('nombreU').classList.remove('is-invalid');
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
    case "contraseña":
      if (!Contra.test(e.target.value)) {
        document.getElementById('contraseña').classList.add('is-invalid');
        document.getElementById('contraseña').classList.remove('is-valid');
      } else {
        document.getElementById('contraseña').classList.add('is-valid');
        document.getElementById('contraseña').classList.remove('is-invalid');
      }
      break;
    case "confirmContraseña":
      if (!ContraC.test(e.target.value)) {
        document.getElementById('confirmContraseña').classList.add('is-invalid');
        document.getElementById('confirmContraseña').classList.remove('is-valid');
      } else {
        document.getElementById('confirmContraseña').classList.add('is-valid');
        document.getElementById('confirmContraseña').classList.remove('is-invalid');
      }
      break;
  }
}

function alerta() {
  alert('Se registro correctamente');
}

/////////////////////////////verificar contraseña/////////////////////////////


const validarContra = (e) => {
  const con1 = document.querySelector('#contraseña');
  const con2 = document.querySelector('#confirmContraseña');
  if (con1.value !== con2.value) {
    document.getElementById('confirmContraseña').classList.add('is-invalid');
    document.getElementById('confirmContraseña').classList.remove('is-valid');
  } else if (con1.value == con2.value) {
    document.getElementById('confirmContraseña').classList.add('is-valid');
    document.getElementById('confirmContraseña').classList.remove('is-invalid');
  }
}





nombre.addEventListener('input', (e) => validarForm(e));
nombreU.addEventListener('input', (e) => validarForm(e));
email.addEventListener('input', (e) => validarForm(e));
contraseña.addEventListener('input', (e) => validarForm(e));
confirmContraseña.addEventListener('input', (e) => validarForm(e));
confirmContraseña.addEventListener('input', (e) => validarContra(e));