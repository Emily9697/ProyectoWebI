
const conten = document.querySelector('#contenedorS');

function mostrarServicios(ObServicios) {
    ObServicios.forEach(objSe => {
        const im = objSe.Imagen;
        const ti = objSe.Titulo;
        const des = objSe.Descripcion;
        const crearCarta = document.createElement('div');
        crearCarta.classList.add('col-md-4');
        crearCarta.innerHTML = `
        <div class="card h-100">
            <img src="${im}"
            class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${ti}</h5>
                        <p class="card-text">
                            <p><b>Descripción:</b> ${des}</p>
                        </p>
                <a href="../Contacto/contacto.html" class="btn btnColor active" role="button"
                    aria-pressed="true">Obtener información</a>
            </div>
        </div>
        `;
        conten.appendChild(crearCarta);
    });
};

mostrarServicios(ObServicios);








