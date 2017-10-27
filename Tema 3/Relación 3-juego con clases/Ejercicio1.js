var tablero = [];
var lista = [];
function genera(){
    for(i=0;i<5;i++){
    for(j=0;j<5;j++){
     tablero.push(0);   
    }
}
return tablero;
}
a = genera();
document.write(a.length);

for (i=1;i<tablero.length;i++){
    lista.push(i);
}
//document.write(tablero);
//document.write(lista);