var tablero = {
        x: 4,           // posicion X
        y: 83,          // posicion Y
        width: 0,       // Ancho
        height: 0,      // Alto
        columns: 15,    // Columnas máximas
        rows: 14,       // Filas máximas
        tilewidth: 40,  // Ancho del título
        tileheight: 40, // Alto del título
        rowheight: 34,  // Altura de fila
        radius: 20,     // Radio de colisión
        tiles: []       // Array del titulo
};

var jugador = {
        x: 0,
        y: 0,
        angulo: 0,
        color: 0,
        bubble: {
                    x: 0,
                    y: 0,
                    angle: 0,
                    speed: 1000,
                    dropspeed: 900,
                    color: 0,
                    visible: false
                },
        nextbubble: {
                        x: 0,
                        y: 0,
                        color: 0
                    }
};

var vecinos = [[[1, 0], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]],
[[1, 0], [1, 1], [0, 1], [-1, 0], [0, -1], [1, -1]]];

var colores = 6;

var estado_juego = {init:0, listo:1, disparo:2, explota:3, gameover:4};

var estado = estado_juego.init;

