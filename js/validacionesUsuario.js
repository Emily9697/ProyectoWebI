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

///NombreUsuario
const nombre = document.querySelector('#nombre');
const Nom = new RegExp('([A-Za-z]{7}|[0-9]{7}|[A-Za-z][0-9])');

////contraseña
const contraseña = document.querySelector('#contraseña');
const Contra = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');

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

nombre.addEventListener('input', (e) => validarForm(e));
contraseña.addEventListener('input', (e) => validarForm(e));