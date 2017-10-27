//Find largest number
prueba = [2,3,4,5];
max = Math.max(...prueba);
//document.write(max);

//Find longest string
var fruits = ["Apple", "Banana", "Orange", "Pomegranate", "Peach"];
var largest = 0;
var largestName = "";
for (i = 0; i < fruits.length; i++) {
    if (fruits[i].length > largest) {
        largest = fruits[i].length;
        largestName = fruits[i];
    }
}
//document.write(largestName);

// find even numbers
resultado = [];
for (i=0;i< prueba.length;i++){
    if(prueba[i]%2==0){
        resultado.push(prueba[i])
    }
}
//document.write(resultado);

//Find odd numbers
impar = []
for (i=0;i<prueba.length;i++){
    if (prueba[i]%2!=0){
        impar.push(prueba[i])
    }
}
//document.write(impar);

//Find words that contain is
function findMatchingWords(t, s) {
    var re = new RegExp("\\w*"+s+"\\w*", "g");
    return t.match(re);
}

//document.write(findMatchingWords("Like a sunshine beautiful", "is"));

//assert all numbers are divisible by three
divi = []
for (i=0;i<prueba.length;i++){
    if (prueba[i]%3==0){
        divi.push(prueba[i])
    }
}
//document.write(divi);
//Zip two arrays together
var a = [1, 2, 3]
var b = ['a', 'b', 'c']

var c = a.map(function(x, y) {
  return [x, b[y]];
});

//document.write(c);

//sort joined array from smallest to largest
ordena = [8,9,2,4,3,1];
ordena.sort();
//document.write(ordena);

//Remove the first word in the array
elimina = ["pepe","juan","manuel"];
elimina.shift();
//document.write(elimina);

//place a new word at the start of the array
normal = ["juanita","antoñita","lararita"];
normal.unshift("florencia");
//document.write(normal);

//replace some elements
lala = [1,2,3];
lala[0]="hola";
//document.write(lala);

//Ordenar lista de nombres que empiecen por J
nombres = ["jose","juana","juanola","jimena"];

nombres.sort();
//document.write(nombres);



