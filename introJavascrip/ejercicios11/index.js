//Hacer una función que convierta de grados centígrados a Farenheit

// function comvertir () {
//     var celcius = document.getElementById("gradoCelcius").value;
//     var Farenheit=((celcius*9)/5)+32;

//     alert(Farenheit+"F");
// }

//ejercicio 1
// function convertir(){
//     var celsius = document.getElementById("gradoCelsius").value;
//     var fahrenheit=((celsius*9)/5)+32;
    
    
//     alert(fahrenheit+"F");
// }

//ejercicio 2
// var multi = prompt('ingresa un numero del cual sacar la tabla de multiplicas hasta el 10')

// function tablaMult(number) {
//     var res =""
//     var cont =1

//     for (let index  =0; index < 10; index ++){
//         res += parseInt(number)+ " X " + parseInt(cont)+"=" + (number*cont)+"\n"
//         cont++
//     }
//     return res;
// }

//ejercicio2.5  Leer un arreglo de enteros y obtener su promedio
var numeros  = [1,2,3,4,5,6,7];

function promedio(numeros){
    var sumatotal=0
    var division=0
    for(var index=0; index<numeros.length; index++)
    {
        sumatotal = sumatotal + numeros[index]

    }
    division = resultados / numeros.length;
    return division
}
console.log(promedio(numeros))

//ejercicio 3 me exploto la cabeza  Leer un arreglo de enteros y obtener su promedio
// function ArrayAvg(myArray) {
//     var i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
// }
//     return summ / ArrayLen;
// }
// var myArray = [1, 5, 2, 3, 7];
// var a = ArrayAvg(myArray);
// console.log(a)



//ejerccio 3.2 Crear una funcion que reciba como
//   parametro una oración y defina si
//   es palindromo


//ejercicio 4
// Escribe una función que halle
//    el máximo entre tres números

// console.log(Math.max(7, 100, 99,));




//ejercicio 5
//Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.



//ejercicio 6
//Crea una función que reciba un texto y lo devuelva al revés
// const invertirCadena = cadena => cadena.split("").reverse().join("");
 
// let cadena = "Hola";
// console.log("Cadena:", invertirCadena(cadena));


//ejercicio 7 
// Escribe una función que imprima una
//    pirámide de astericos como la siguiente:
//                    *
//                   * *
//                  * * *
//                 * * * *
//                * * * * * 


//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor
// Realiza un script que genere un número aleatorio entre 1 y 99
// Realiza un script que pida un texto y lo muestre en mayúsculas.
// Realiza un juego de Piedra Papel Tijera contra el Pc
// Hacer una funcion que calcule el tiempo
//   necesario para que un automóvil que se
//   mueve con una velocidad de 73000 m/h
//   recorra una distancia de 120 km.
//             (TIEMPO = d/v) (editado) 