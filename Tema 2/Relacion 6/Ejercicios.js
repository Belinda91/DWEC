// Ejercicio 2

var numImagenes = () => {
    return document.images.length;
}

console.log("El numero de imagenes es : " + numImagenes());

var IDprimera = () => {
    let coge = document.images.item(0);
    return coge.id;
};
console.log ("Id de la primera imagen: " + IDprimera());

var numLinks = () => {
    return document.links.numLinks;
};
console.log("La cantidad de links de la página es: " + numLinks());

var cambiatitulo = (titulo) => {
    document.title = titulo;
};
cambiatitulo("Pagina de prueba");
console.log("Titulo cambiado a Pagina de prueba");