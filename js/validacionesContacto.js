

const formulario = document.querySelector("#form");

/* Expresiones regulares*/

const exrNombre = /^[a-zA-Z]{3,15}$/;
const exrApellidos = /^[a-zA-Z\s]{1,25}$/;
const exrTelefono = /^[0-9]{8}$/;





(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')


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



formulario.addEventListener("input", (e) => {
  e.preventDefault();


  validarNombre();
  validarApellidos();
  validarTelefono();
  validarTelefAlt();
  confirmCorreo();

});



function validarNombre() {

  const nombre = document.querySelector('#nombre').value
  let coincidencia = exrNombre.test(nombre)

  if (coincidencia === false) {
    document.getElementById('nombre').classList.add('is-invalid')
    document.getElementById('nombre').classList.remove('is-valid')
  } else if (coincidencia === true) {
    document.getElementById('nombre').classList.add('is-valid')
    document.getElementById('nombre').classList.remove('is-invalid')
  }

}



function validarApellidos() {

  const apellidos = document.querySelector('#apellidos').value
  let coincidencia = exrApellidos.test(apellidos)

  if (coincidencia === false) {
    document.getElementById('apellidos').classList.add('is-invalid');
    document.getElementById('apellidos').classList.remove('is-valid');
    console.log("Si");
  } else if (coincidencia === true) {
    document.getElementById('apellidos').classList.add('is-valid');
    document.getElementById('apellidos').classList.remove('is-invalid');
    console.log("No")
  };


};

/*function validarCorreo() {

  const correo = document.querySelector('#correo').value
  let coincidencia = exrCorreo.test(correo)


  if (coincidencia === false) {
    document.getElementById('correo').classList.add('is-invalid')
    document.getElementById('correo').classList.remove('is-valid')

  } else if (coincidencia === true) {
    document.getElementById('correo').classList.add('is-valid')
    document.getElementById('correo').classList.remove('is-invalid')

  }

}*/


function confirmCorreo() {

  correo1 = formulario.correo.value;
  correo2 = formulario.cCorreo.value;

  if (correo1 === '') {
    document.getElementById('confirmCont').classList.add('is-invalid');
    document.getElementById('confirmCont').classList.remove('is-valid');
  } else if (correo1 === correo2) {
    document.getElementById('confirmCont').classList.add('is-valid');
    document.getElementById('confirmCont').classList.remove('is-invalid');
  } else {
    document.getElementById('confirmCont').classList.add('is-invalid');
    document.getElementById('confirmCont').classList.remove('is-valid');

  };

};





function validarTelefono() {

  const telefono = document.querySelector('#telefono').value
  let coincidencia = exrTelefono.test(telefono)

  if (coincidencia === false) {
    document.getElementById('telefono').classList.add('is-invalid');
    document.getElementById('telefono').classList.remove('is-valid');
  } else if (coincidencia === true) {
    document.getElementById('telefono').classList.add('is-valid');
    document.getElementById('telefono').classList.remove('is-invalid');
  };

};

function validarTelefAlt() {

  const telefonoAlt = document.querySelector('#telfAlt').value
  let coincidencia = exrTelefono.test(telefonoAlt)

  if (coincidencia === false) {
    document.getElementById('telfAlt').classList.add('is-invalid')
    document.getElementById('telfAlt').classList.remove('is-valid')
  } else if (coincidencia === true) {
    document.getElementById('telfAlt').classList.add('is-valid')
    document.getElementById('telfAlt').classList.remove('is-invalid')
  }

}