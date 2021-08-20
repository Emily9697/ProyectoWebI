const provincias = document.querySelector('#provincias');
const cantones = document.querySelector('#cantones');
const conten = document.querySelector('#contenedor');


const casas = {
    Imagen: '',
    Titulo: '',
    Provincia: '',
    Canton: '',
    Precio: '',
};

provincias.addEventListener('change', e => {
    casas.Provincia = e.target.value;
    mostrarCantones();
    FiltrarCasas();
});

cantones.addEventListener('change', e => {
    casas.Canton = e.target.value;
    FiltrarCasas();
});

function removerCasas() {
    while (conten.firstChild) {
        conten.removeChild(conten.firstChild);
    };
};

const objCasas = ObCasas;

function MostrarCasas(objCasas) {
    removerCasas();
    objCasas.forEach(ObCasa => {
        const im = ObCasa.Imagen;
        const ti = ObCasa.Titulo;
        const pro = ObCasa.Provincia;
        const can = ObCasa.Canton;
        const pre = ObCasa.Precio;
        const crearCarta = document.createElement('div');
        crearCarta.classList.add('col-md-4');
        crearCarta.innerHTML = `
        <div class="card h-100">
            <img src="${im}"
            class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${ti}</h5>
                        <p class="card-text">
                            <p><b>Provincia:</b> ${pro}</p>
                            <p><b>Cantón:</b> ${can} </p>
                            <p><b>Precio:</b> <var>${pre}</var> </p>
                        </p>
                <a href="InfoCasa.html" class="btn btnColor active" role="button"
                    aria-pressed="true">Mostrar mas información</a>

                    <a href="../CRD/EditarCasa.html" class="btn btn-primary active" role="button"
                    aria-pressed="true">Editar</a>

            
                    <button class="btn btn-danger" type="submit" onclick="myFunction()" >Eliminar</button>
                    
            </div>
        </div>
        `;
        conten.appendChild(crearCarta);
    });
};


/////////////////////////////////////////////////////////////////////////

function FilProvincias(ObCasas) {
    const resul = [];
    ObCasas.forEach(element => {
        const Provincia = element.Provincia;
        if (resul.indexOf(Provincia)) {
            resul.unshift(Provincia);
        }
    });
    for (var i = 0; i < resul.length; i++) {
        const op = document.createElement('option');
        op.innerHTML = resul[i];
        provincias.appendChild(op);
    }
};

function FilCanton(ObCasas) {
    const resulC = [];
    for (var i = 0; i < resulC.length; i++) {
        resulC.pop();
        cantones.removeChild(cantones.lastChild);
    }
    ObCasas.forEach(element => {
        const canton = element.Canton;
        if (resulC.indexOf(canton)) {
            resulC.unshift(canton);
        };
    });
    for (var i = 0; i < resulC.length; i++) {
        const op = document.createElement('option');
        op.innerHTML = resulC[i];
        cantones.appendChild(op);
    }
}

function FiltrarCasas() {
    const resultado = ObCasas.filter(FiltrarProvincia).filter(FiltrarCanton);
    if (resultado.length) {
        MostrarCasas(resultado);
    };
};

function mostrarCantones() {
    const filC = ObCasas.filter(llenarProvincia);
    FilCanton(filC);
};

function llenarProvincia(ca) {
    const Provin = casas.Provincia;
    return ca.Provincia === Provin;
};
//////////////////////////////////////////////////////

function FiltrarCanton(ca) {
    const Canto = casas.Canton;
    if (Canto) {
        return ca.Canton === Canto;
    };
    return ca;
};

function FiltrarProvincia(ca) {
    const Provin = casas.Provincia;
    if (Provin) {
        return ca.Provincia === Provin;
    };
    return ca;
};

function myFunction() {
    var myobj = document.getElementsByClassName("card");

    if (!myobj){
        alert("El elemento selecionado no existe");
    } else {
        padre = myobj.parentNode;
        padre.removeChild(myobj);
    }
}




FilProvincias(ObCasas);
mostrarCantones(ObCasas);
FiltrarCasas(ObCasas);

