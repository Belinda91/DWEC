//Ejercicio 1: captura video mediante tu webcam y muéstralo en la web
//var constraints = {video: true};
//
//function vervideo(stream) {
//  var video = document.getElementById("live");
//  video.src = window.URL.createObjectURL(stream);//Crea un string que contiene una URL que representa al objeto pasado como parámetro
//}
//
//function novervideo(error) {
//  console.log("navigator.getUserMedia error: ", error);
//}
//
//navigator.getUserMedia = ( navigator.getUserMedia ||
//                       navigator.webkitGetUserMedia ||
//                       navigator.mozGetUserMedia ||
//                       navigator.msGetUserMedia);
//
//navigator.getUserMedia(constraints, vervideo, novervideo);

//Ejercicio 2: captura audio
var constraints2 = {video: false, audio: true};

function oiraudio(stream2) {
  var video = document.getElementById("sound");
  video.src = window.URL.createObjectURL(stream2);//Crea un string que contiene una URL que representa al objeto pasado como parámetro
}

function nooiraudio(error) {
  console.log("navigator.getUserMedia error: ", error);
}

navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

navigator.getUserMedia(constraints2, oiraudio, nooiraudio);


