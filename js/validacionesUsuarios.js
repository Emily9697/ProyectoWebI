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
const Nom = new RegExp('(^[A-Za-z]{1,3}([0-9]{4})){1}');
  
////contraseña
const contraseña = document.querySelector('#contraseña');
const Contra = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');0


  

  
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

      case "contraseña":
        if (!Contra.test(e.target.value)) {
          document.getElementById('contraseña').classList.add('is-invalid');
          document.getElementById('contraseña').classList.remove('is-valid');
        } else {
          document.getElementById('contraseña').classList.add('is-valid');
          document.getElementById('contraseña').classList.remove('is-invalid');
        }
        break; 
        }
  }
  

  nombre.addEventListener('input', (e) => ValidarForm(e));
  cedula.addEventListener('input', (e) => ValidarForm(e));
  email.addEventListener('input', (e) => ValidarForm(e));
  contraseña.addEventListener('input', (e) => ValidarForm(e));
  confirmContraseña.addEventListener('input', (e) => ValidarForm(e));
  confirmContraseña.addEventListener('input', (e) => ValidarContra(e));
  