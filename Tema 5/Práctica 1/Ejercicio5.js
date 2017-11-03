
function generaInput(){
    var formulario = document.getElementById('formulario');
    br = document.createElement('br'); //Se crea el br para que aparezca cada orden en un renglón diferente
    formulario.appendChild(br); //Se añade al formulario para que se apliquen los efectos
    var nuevoAdjunto = document.createElement('input'); //Crea un nuevo elemento de clase input
    var tipo = document.createAttribute('type'); //Crea el atributo type
    tipo.value = 'file'; //le añade a la variable tipo el valor archivo
    nuevoAdjunto.setAttributeNode(tipo); //setAttributeNode ->añade la clase tipo a nuevoAdjunto
    var evento = document.createAttribute('onclick'); //Crea el atributo onlick
    evento.value = 'generaInput()'; // El valor de evento es el llamarse a sí mismo
    nuevoAdjunto.setAttributeNode(evento); //Crea un nuevo nodo de evento
    formulario.appendChild(nuevoAdjunto); //Introduce el hijo nuevo adjunto a formulario
    
    var enviar = document.createElement('button');
    var var2 = document.createAttribute('type'); 
    var2.value = 'button';
    enviar.setAttributeNode(var2);
    var evento2 = document.createAttribute('onclick');
    evento2.value = 'alert("Archivo enviado")';
    enviar.setAttributeNode(evento2);
    enviar.appendChild(document.createTextNode('Enviar'));
    formulario.appendChild(enviar);
}