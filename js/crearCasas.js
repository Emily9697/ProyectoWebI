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
  casas.provincia = e.target.value;
  filtrarCasa();
});

cantones.addEventListener('change', e => {
  casas.canton = e.target.value;
  filtrarCasa();
});


function mostrarCasas(ObCasas) {
  removerCasas();
  ObCasas.forEach(ObCasa => {
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
            </div>
        </div>
        `;
    conten.append(crearCarta);
  });
};


function mostrarCanton() {

  var provincias = document.querySelector('#provincias');
  var cantoness = document.querySelector('#cantones');

  cantoness.innerHTML = "";

  if (provincias.value === "San José") {

    var cantonesP = ['San José', 'Acosta', 'Alajuelita', 'Aserrí', 'Curridabat', 'Desamparados', 'Dota', 'Escazú',
      'Goicoechea', 'León Cortés', 'Montes de Oca', 'Mora',
      'Moravia', 'Pérez Zeledón', 'Puriscal', 'Santa Ana',
      'Tarrazú', 'Tibás', 'Turrubares', 'Vázquez de Coronado'
    ];

  } else if (provincias.value === "Alajuela") {
    var cantonesP = ['Alajuela', 'Atenas', 'Grecia', 'Guatuso', 'Los Chiles', 'Naranjo', 'Orotina', 'Palmares', 'Poás',
      'Río Cuarto', 'San Carlos', 'San Mateo', 'San Ramón', 'Sarchí', 'Upala', 'Zarcero'
    ];
  } else if (provincias.value === "Cartago") {

    var cantonesP = ['Cartago', 'Alvarado', 'El Guarco', 'Jiménez',
      'La Unión', 'Oreamuno', 'Paraíso', 'Turrialba'
    ];

  } else if (provincias.value === "Heredia") {

    var cantonesP = ['Heredia', 'Barva', 'Belén', 'Flores', 'San Isidro',
      'San Pablo', 'San Rafael', 'Santa Bárbara', 'Santo Domingo', 'Sarapiquí'
    ];

  } else if (provincias.value === "Guanacaste") {

    var cantonesP = ['Liberia', 'Abangares', 'Bagaces', 'Cañas', 'Carrillo', 'Hojancha', 'La Cruz',
      'Nandayure', 'Nicoya', 'Santa Cruz', 'Tilarán'
    ];
  } else if (provincias.value === "Puntarenas") {

    var cantonesP = ['Puntarenas', 'Buenos Aires', 'Corredores', 'Coto Brus', 'Esparza', 'Garabito',
      'Golfito', 'Montes de Oro', 'Osa', 'Parrita', 'Quepos'
    ];
  } else if (provincias.value === "Limon") {

    var cantonesP = ['Limón', 'Guácimo', 'Matina', 'Pococí', 'Siquirres', 'Talamanca'];
  }

  for (var i = 0; i < cantonesP.length; i++) {
    const op = document.createElement('option');
    op.value = cantonesP[i];
    op.innerHTML = cantonesP[i];
    cantones.append(op);
  }
}

function removerCasas() {
  while (conten.firstChild) {
    conten.removeChild(conten.firstChild);
  };
};

function filtrarCasa() {
  const resultado = ObCasas.filter(filtrarProvincia).filter(filtrarCanton);
  if (resultado.length) {
    mostrarCasas(resultado);
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



mostrarCasas(ObCasas);