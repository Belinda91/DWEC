//Ejercicio 2

//var lanzamiento = () => Math.floor(Math.random() * 6) + 1;//Máximo y mínimo entre lo que se quiere poner

//document.write(lanzamiento(1,6));

//Ejercicio 3
//function intervalo(){
//    var tiro1 = 0;
//    var tiro2 = 0;
//    var tiro3 = 0;
//    var tiro4 = 0;
//    var tiro5 = 0;
//    var tiro6 = 0;
//    for (i=1;i<6001;i++){
//        switch(lanzamiento(1,6)){
//            case 1:
//                tiro1++;
//                break;
//            case 2:
//                tiro2++;
//                break;
//            case 3:
//                tiro3++;
//                break;
//            case 4:
//                tiro4++;
//                break;
//            case 5:
//                tiro5++;
//                break;
//            case 6:
//                tiro6++;
//        }
//    }
//    document.write('El uno ha salido: ' + tiro1 + '<br/>','El dos ha salido: ' + tiro2 + '<br/>','El tres ha salido: ' + tiro3 + '<br/>','El cuatro ha salido: ' + tiro4 + '<br/>','El cinco ha salido: ' + tiro5 + '<br/>','El seis ha salido: ' + tiro6 + '<br/>')
//}
//
//intervalo();
//
////Ejercicio 6
//function eleva(base,exponente){
//    if (exponente == 0){
//        return 1;
//    }
//    else{
//        return base * eleva(base,(exponente-1));
//    }
//    
//}
//
//document.write(eleva(2,6));

//Ejercicio 7
//function factorial(numero){
//    if (numero == 0 || numero ==1){
//        return 1;
//    }
//    else{
//        return numero * factorial(numero - 1);
//    }
//}
//
//function calcula10(){
//    for (i=1;i<11;i++){
//        document.write('El resultado de ' + i + ' es ' + factorial(i) + '<br/>');
//    }
//}
//
//document.write('<br/>' + potencia(5));
//document.write(calcula10());