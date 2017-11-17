setInterval(mover,1000/600);

//var pasoX = 3;
//var pasoY = 3;
//var pasoX2 = 3;
//var pasoY2 = 3;

function mover(){
    var circulo = document.getElementById("circulo2");
    var circulo2 = document.getElementById("circulo");
//    var posX2 = parseInt(circulo2.getAttribute("cx"));
//    var posY2 = parseInt(circulo2.getAttribute("cy"));
//    var posX = parseInt(circulo.getAttribute("cx"));
//    var posY = parseInt(circulo.getAttribute("cy"));
    detecta(circulo,3,3);
//    if (posY < 650 && posX < 950){
//      circulo.setAttribute('cx', (posX + pasoX));
//      circulo.setAttribute('cy', (posY + pasoY));
//    }
//    if (posY >= 650 || posY <= 50) {
//      pasoY *= -1;
//      circulo.setAttribute('cx', (posX + pasoX));
//      circulo.setAttribute('cy', (posY + pasoY));
//    }
//    if (posX >= 950 || posX <= 50) {
//      pasoX *= -1;
//      circulo.setAttribute('cx', (posX + pasoX));
//      circulo.setAttribute('cy', (posY + pasoY));
//    }
//    if (posY2 < 650 && posX2 < 950){
//      circulo2.setAttribute('cx', (posX2 + pasoX2));
//      circulo2.setAttribute('cy', (posY2 + pasoY2));
//    }
//    if (posY2 >= 650 || posY2 <= 50) {
//      pasoY2 *= -1;
//      circulo2.setAttribute('cx', (posX2 + pasoX2));
//      circulo2.setAttribute('cy', (posY2 + pasoY2));
//    }
//    if (posX2 >= 950 || posX2 <= 50) {
//      pasoX2 *= -1;
//      circulo2.setAttribute('cx', (posX2 + pasoX2));
//      circulo2.setAttribute('cy', (posY2 + pasoY2));
//    }
    detecta(circulo2,3,3);
}

function detecta(nombre,pasox,pasoy){
    var apx = parseFloat(nombre.getAttribute("cx")) + pasox; 
    var apy = parseFloat(nombre.getAttribute("cy")) + pasoy;
    apy += pasoy;
    if(apy >= 650 || apy <= 50){
    //py = py - pasoy; 
        nombre.setAttribute('cy', parseFloat(nombre.getAttribute("cy") - pasoy));
    }else{
    //py = py + pasoy; 
        nombre.setAttribute('cy', parseFloat(nombre.getAttribute("cy") + pasoy));
    }
    apx += pasox
    if(apx >= 950 || apx <= 50){
        nombre.setAttribute('cx', parseFloat(nombre.getAttribute("cx") - pasox));
    }else{
        nombre.setAttribute('cx', parseFloat(nombre.getAttribute("cy") + pasox));
    }
}
//    var posX = parseInt(nombre.getAttribute("cx"));
//    var posY = parseInt(nombre.getAttribute("cy"));
//    if (posY < 650 && posX < 950){
//      nombre.setAttribute('cx', (posX + pasoX));
//      nombre.setAttribute('cy', (posY + pasoY));
//    }
//    if (posY >= 650 || posY <= 50) {
//      pasoY *= -1;
//      nombre.setAttribute('cx', (posX + pasoX));
//      nombre.setAttribute('cy', (posY + pasoY));
//    }
//    if (posX >= 950 || posX <= 50) {
//      pasoX *= -1;
//      nombre.setAttribute('cx', (posX + pasoX));
//      nombre.setAttribute('cy', (posY + pasoY));
//    } 
//}
