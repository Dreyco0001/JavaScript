//receta para crear una función
//1 declarar la funcion 
// 2 establecer los parametros de mi funcion 
//3 dentro de las {} vamos a poner el codigo a ejecutar de  mi funcion
//4 ejecutar nuestra funcion

function suma(numero1, numero2) {
    var resta = numero1 - numero2; 
    return 'la resta es: '+ resta;
}

// console.log(resta(3,2))

var  inputUsuario1 = prompt("ingrese un numero")
var  inputUsuario2 = prompt("ingrese un numero")

var resultados = resta (inputUsuario1, inputUsuario2)
console.log(resultados)