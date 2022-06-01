// 1
/* 
var bellisimo = prompt('¿Eres bellisimo/a?').toLocaleLowerCase();
if (bellisimo == "si" ) {
    console.log("Ciertamente");
}else if(bellisimo == "no"){
    console.log("No te creo");
}
​
*/


// 2
/*
var num = prompt('Ingresa un numero');
var num2 = prompt('Ingresa el numero a dividir')
if (parseInt(num) % 2 == 0) {
    console.log('El numero: '+num + ' es divisible entre dos');
}else if (parseInt(num) % num2 == 0) {
    console.log('El numero: '+num + ' es divisible entre '+ num2);
}else{
    console.log('El numero: '+num + ' no es divisible entre dos');
}
​
*/

//3
/*
var num = prompt('Ingresa un numero');
if (parseInt(num) % 2 == 0) {
    alert('El numero: '+num + ' es par');
}else{
    alert('El numero: '+num + ' no es par');
}
*/

//4
/*
var num = prompt('Ingresa un numero');
if(parseInt(num) === 1000){
    console.log('Ganaste un premio');
}else{
    console.log('Numero: '+num +' Lo sentimos, sigue participando');
}
*/
//5
/*
var num = prompt('Ingresa un numero');
var num2 = prompt('Ingresa un segundo numero')
if (parseInt(num) > parseInt(num2)) {
    console.log(num2+ ' es el menor');
}else{
    console.log(num+ ' es el menor');
}
*/
//6
/*
var num1 = parseInt(prompt("numero uno: "));
var num2 = parseInt(prompt("numero dos: "));
var num3 = parseInt(prompt("numero tres: "));
var mayor;
if(num1 > num2 && num1 > num3) {
    mayor = num1;
    console.log("El mayor es " + mayor);
}
else if (num2 > num1 && num2 > num3) {
    mayor = num2;
    console.log("El mayor es " + mayor);
}else if(num1 == num2){
    console.log("Son iguales " + num1 + " y "+ num2 );
}else if(num1 == num3){
    console.log("Son iguales " + num1 + " y "+ num3 );
}else if(num2 == num1){
    console.log("Son iguales " + num2 + " y "+ num1 );
}
else if(num2 == num3){
    console.log("Son iguales " + num2 + " y "+ num3 );
}else if(num3 == num1){
    console.log("Son iguales " + num3 + " y "+ num1 );
}else if(num3 == num2){
    console.log("Son iguales " + num3 + " y "+ num2 );
}
else {
    mayor = num3;
    console.log("El mayor es " + mayor);
}
*/
//7

/*
var dia = prompt("Ingresa un dia de la semana").toLocaleLowerCase();
if (dia == "lunes") {
  console.log("Lunes");
} else if (dia == "viernes") {
  console.log("Viernes");
} else if (dia == "sabado") {
  console.log("sabado");
} else if (dia == "domingo") {
  console.log("Domingo");
}
*/

//8
/*
var calificacion = parseInt(prompt("Ingresar una calificacion entre 1 y 10: "));
if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >=6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else if (calificacion == 10) {
    console.log("excelente");
  }
} else {
  console.log("Error");
}
​
*/

//9
/*
var topping = parseInt(prompt("Elige el tipo de topping para tu helado: \n '1' sin topping \n '2' topping oreo \n '3' topping KitKat \n '4' topping brownie  "));
​
if (topping == 1) {
    console.log("El helado sin topping cuesta 50 MXN");
}else if(topping == 2){
    console.log("El topping de oreo cuesta 10 MXN." + "Total: " + (50+10) + " MXN.");
}else if (topping == 3) {
    console.log("El topping de KitKat cuesta 15 MXN." + "Total: " + (50+15) + " MXN.");
}else if (topping == 4) {
    console.log("El topping de brownie cuesta 20 MXN." + "Total: " + (50+20) + " MXN.");
}else{
    console.log("Opcion no valida");
}
*/

//10
/*
var programa = parseInt(prompt("Elige el tipo de programa: \n '1' Course \n '2' Carrera  \n '3' Master "));
if (programa == 1) {
   console.log("Course: $4999 MXN")
}else if (programa == 2) {
    console.log("Carrera $3999 MXN")
}else if (programa == 3) {
    console.log("Master: $2999 MXN")
}else{
    console.log("Opcion no valida");
}
*/
