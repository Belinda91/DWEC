/*function sum_numero(){
  var sum = 0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}*/
//Otro modo, con spread
function sum(...arg){
    let suma = 0;
    for (n = 0; n < arg.length; n++){
        suma = suma + parseInt(arg[n]);
    }
    return suma;
}

console.log(sum_numero(1,2));
console.log(sum_numero(1,2,3));
console.log(sum_numero(1,2,3,4));

//Ejercicio 2
/*function addonlyNums(){
    var sum = 0;
    for (var i=0; i<arguments.length;i++){
        if (typeof(arguments[i]) == 'number'){
            sum += arguments[i];
        }
    }
    return sum;
}*/
//Otro modo
function addOnlyNums(...args){
    let suma = 0;
    for (n = 0; n < args.length; n++){
        if (typeof(args[m])== 'number'){
            suma = suma + args[n];
        }
    }
    return suma;
}

console.log(addonlyNums(1,'cat',3,4));

//Ejercicio 3
function countTheArgs(){
    var contador = 0;
    for (var i = 0; i<arguments.length;i++){
        contador += 1;
    }
    return contador;
}

console.log(countTheArgs('pepito',3,'juanita'));
console.log(countTheArgs('antonio',13));

//Ejercicio 4
/*function combineTwoArrays(a1,a2){
    num = ai.length;
    a3 = a1(...a2);
    return a3,
}
var parts = ['shoulder', 'knees'];
var parts2 = ['nose','head'];
console.log(combineTwoArrays(parts,parts2));*/
    
//Ejercicio 5: combineAllArrays
function comibeAllArrays(...args){
    array = {}
    for i of args{
        array.push(i);
    }
    return array;
}
//Otro modo
var combineAllArrays = (arr1, ...arr2)=> {
    return arr1.concat(...arr2);
};
//Ejercicio 6:
function squareAndSum(){
    var sum = 0; 
  for(var i=0;i<arguments.length;i++){
     sum += (arguments[i]*arguments[i]);
  }
   return sum;
}

console.log(squareAndSum(2,4,3));


