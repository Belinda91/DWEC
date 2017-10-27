//Ejercicio 5
function paresImpares(){
    var lista = [];
    var lista2 = [];
    var lista3 = [];
    for (i=0;i<=99;i++){
        numero = Math.round(Math.random() * (1001-1) + 1);
        lista[i]=numero;
        if (numero%2==0){
            lista2.push(numero);
        }
        else{
            lista3.push(numero);
        }
    }
    document.write(lista + '<br/>');
    document.write(lista2.concat(lista3));
}

//paresImpares();

//Ejercicio 7
//APARTADO A
function elementos(lis){
    respuesta = [];
    for (i=0;i<=10;i++){
        respuesta.push(0);
    }
    return respuesta;
}

//cad = [2,4,5,7,1];
//document.write(elementos(cad));

//APARTADO B
function sumalis(lis){
    solucion = [];
    for (i=0;i<lis.length;i++){
        sol = lis[i];
        solucion.push(sol + 1);
    }
    return solucion;
}

//cad = [2,4,5,7,1];
//document.write(sumalis(cad));

//APARTADO C
function mases(lis){
    solucion = [];
    for (i=0;i<lis.length;i++){
        sol = lis[i];
        solucion.push(sol + ' ');
    }
    return solucion;
}

//cad = [2,4,5,7,1];
//document.write(mases(cad));

//Ejercicio 8

function tirados()
{
    sumar = [];
    resultado = [];
    cuenta = [];
    cuenta[2] = 0;
    cuenta[3] = 0;
    cuenta[4] = 0;
    cuenta[5] = 0;
    cuenta[6] = 0;
    cuenta[7] = 0;
    cuenta[8] = 0;
    cuenta[9] = 0;
    cuenta[10] = 0;
    cuenta[11] = 0;
    cuenta[12] = 0;
    for (i=1;i<=36000;i++){
        tira1 = Math.floor(Math.random() * 6) + 1;
        tira2 = Math.floor(Math.random() * 6) + 1;
        suma = tira1 + tira2;
        cuenta[suma]++;
        
    }
    for (j=2;j<=12;j++){
        resultado.push(cuenta[j])
    }
    document.write('El 2 sale: '+ resultado[0] + '<br/>');
    document.write('El 3 sale: '+ resultado[1] + '<br/>');
    document.write('El 4 sale: '+ resultado[2] + '<br/>');
    document.write('El 5 sale: '+ resultado[3] + '<br/>');
    document.write('El 6 sale: '+ resultado[4] + '<br/>');
    document.write('El 7 sale: '+ resultado[5] + '<br/>');
    document.write('El 8 sale: '+ resultado[6] + '<br/>');
    document.write('El 9 sale: '+ resultado[7] + '<br/>');
    document.write('El 10 sale: '+ resultado[8] + '<br/>');
    document.write('El 11 sale: '+ resultado[9] + '<br/>');
    document.write('El 12 sale: '+ resultado[10] + '<br/>');

    
}

tirados();

//Ejercicio 9







