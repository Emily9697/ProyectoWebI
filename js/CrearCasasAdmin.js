const conten2 = document.querySelector('#contenedor');
const provincias = document.querySelector('#provincias');
const cantones = document.querySelector('#cantones');

const casas = {
    Imagen: '',
    Titulo: '',
    Provincia: '',
    Canton: '',
    Precio: '',
};

provincias.addEventListener('change', e => {
    casas.Provincia = e.target.value;
    FiltrarCasas();
});

cantones.addEventListener('change', e => {
    casas.Canton = e.target.value;
    FiltrarCasas();
});


function mostrarCanton() {

    var provincias = document.querySelector('#provincias');
    var cantoness = document.querySelector('#cantones');
  
    cantoness.innerHTML = "";
  
    if (provincias.value === "sanjose") {
  
      var cantonesP = ['San Jose', 'Acosta', 'Alajuelita', 'Aserrí', 'Curridabat', 'Desamparados', 'Dota', 'Escazú',
        'Goicoechea', 'León Cortés', 'Montes de Oca', 'Mora',
        'Moravia', 'Pérez Zeledón', 'Puriscal', 'Santa Ana',
        'Tarrazú', 'Tibás', 'Turrubares', 'Vázquez de Coronado'
      ];
  
    } else if (provincias.value === "alajuela") {
      var cantonesP = ['Alajuela', 'Atenas', 'Grecia', 'Guatuso', 'Los Chiles', 'Naranjo', 'Orotina', 'Palmares', 'Poás',
        'Río Cuarto', 'San Carlos', 'San Mateo', 'San Ramón', 'Sarchí', 'Upala', 'Zarcero'
      ];
    } else if (provincias.value === "cartago") {
  
      var cantonesP = ['Cartago', 'Alvarado', 'El Guarco', 'Jiménez',
        'La Unión', 'Oreamuno', 'Paraíso', 'Turrialba'
      ];
  
    } else if (provincias.value === "heredia") {
  
      var cantonesP = ['Heredia', 'Barva', 'Belén', 'Flores', 'San Isidro',
        'San Pablo', 'San Rafael', 'Santa Bárbara', 'Santo Domingo', 'Sarapiquí'
      ];
  
    } else if (provincias.value === "guanacaste") {
  
      var cantonesP = ['Liberia', 'Abangares', 'Bagaces', 'Cañas', 'Carrillo', 'Hojancha', 'La Cruz',
        'Nandayure', 'Nicoya', 'Santa Cruz', 'Tilarán'
      ];
    } else if (provincias.value === "puntarenas") {
  
      var cantonesP = ['Puntarenas', 'Buenos Aires', 'Corredores', 'Coto Brus', 'Esparza', 'Garabito',
        'Golfito', 'Montes de Oro', 'Osa', 'Parrita', 'Quepos'
      ];
    } else if (provincias.value === "limon") {
  
      var cantonesP = ['Limón', 'Guácimo', 'Matina', 'Pococí', 'Siquirres', 'Talamanca'];
    }
  
    for (var i = 0; i < cantonesP.length; i++) {
      const op = document.createElement('option');
      op.value = cantonesP[i];
      console.log(op.value);
      op.innerHTML = cantonesP[i];
      cantones.append(op);
    }
  }


function MostrarCasasAdmin(objCasas) {
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
                <a href="InfoCasa.html" class="btn btnColor active" role="button" aria-pressed="true">Mostrar mas información</a>
                <a href="../Formularios/editarCasa.html" class="btn btn-primary active" role="button" aria-pressed="true">Editar</a>
                <button type="submit" name="enviar" class="btn btn-danger"  onclick="eliminar()" >Eliminar</button>
                </div>
        </div>
        `;
        conten2.appendChild(crearCarta);
    });
};

function removerCasas() {
  while (conten.firstChild) {
    conten.removeChild(conten.firstChild);
  };
};

function filtrarCasa() {
  const resultado = ObCasas.filter(filtrarProvincia).filter(filtrarCanton);
  if (resultado.length) {
    MostrarCasas(resultado);
  };

};


function filtrarProvincia(ObCasa) {
  const {provincia} = casas;
  if (provincia) {
    return ObCasa.Provincia === provincia;
  };
  return ObCasa;
};

function filtrarCanton(ObCasa) {
  const {canton} = casas;
  if (canton) {
    return ObCasa.Canton === canton;
  };
  return ObCasa;
};



MostrarCasasAdmin(ObCasas);