function rellenar(prov, cant) {
    var prov = document.getElementById(prov);
    var cant = document.getElementById(cant);

    cant.innerHTML = "";

    if (prov.value === "sanjose") {

        var opciones = ['san jose|San Jose', 'acosta|Acosta', 'alajuelita|Alajuelita', 'aserri|Aserrí',
            'curridabat|Curridabat', 'desamparados|Desamparados', 'dota|Dota', 'escazu|Escazú',
            'goicoechea|Goicoechea', 'leon cortes|León Cortés', 'montes de oca|Montes de Oca', 'mora|Mora',
            'moravia|Moravia', 'perez zeledon|Pérez Zeledón', 'puriscal|Puriscal', 'santa ana|Santa Ana',
            'tarrazu|Tarrazú', 'tibas|Tibás', 'turrubares|Turrubares', 'vazquez de coronado|Vázquez de Coronado'
        ];

    } else if (prov.value === "alajuela") {
        var opciones = ['alajuela|Alajuela', 'atenas|Atenas', 'grecia|Grecia', 'guatuso|Guatuso', 'los chiles|Los Chiles', 'naranjo|Naranjo', 'orotina|Orotina', 'palmares|Palmares', 'poas|Poás', 'rio cuarto|Río Cuarto', 'san carlos|San Carlos', 'san mateo|San Mateo',
            'san ramón|San Ramón', 'sarchi|Sarchí', 'upala|Upala', 'zarcero|Zarcero'
        ];
    } else if (prov.value === "cartago") {

        var opciones = ['cartago|Cartago', 'alvarado|Alvarado', 'el guarco|El Guarco', 'jimenez|Jiménez',
            'la union|La Unión', 'oreamuno|Oreamuno', 'paraiso|Paraíso', 'turrialba|Turrialba'
        ];

    } else if (prov.value === "heredia") {

        var opciones = ['heredia|Heredia', 'barva|Barva', 'belen|Belén', 'flores|Flores', 'san isidro|San Isidro',
            'san pablo|San Pablo', 'san rafael|San Rafael', 'santa barbara|Santa Bárbara', 'santo domingo|Santo Domingo', 'sarapiqui|Sarapiquí'
        ];

    } else if (prov.value === "guanacaste") {

        var opciones = ['liberia|Liberia', 'abangares|Abangares', 'bagaces|Bagaces', 'cañas|Cañas', 'carrillo|Carrillo', 'hojancha|Hojancha', 'la cruz|La Cruz',
            'nandayure|Nandayure', 'nicoya|Nicoya', 'santa cruz|Santa Cruz', 'tilara|Tilarán'
        ];
    } else if (prov.value === "puntarenas") {

        var opciones = ['puntarenas|Puntarenas', 'buenos aires|Buenos Aires', 'corredores|Corredores', 'coto brus|Coto Brus', 'esperanza|Esparza', 'garabito|Garabito',
            'golfito|Golfito', 'montes de oro|Montes de Oro', 'osa|Osa', 'parrita|Parrita', 'quepos|Quepos'
        ];
    } else if (prov.value === "limon") {

        var opciones = ['limon|Limón', 'gucimo|Guácimo', 'matina|Matina', 'pococi|Pococí', 'siquirres|Siquirres', 'talamanca|Talamanca'];
    }

    for (var option in opciones) {

        var separar = opciones[option].split("|");
        var nuevaOpcion = document.createElement("option");

        nuevaOpcion.value = separar[0];
        nuevaOpcion.innerHTML = separar[1];
        cant.options.add(nuevaOpcion);

    }
}


