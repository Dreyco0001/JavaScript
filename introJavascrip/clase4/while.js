// Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let num = Number(prompt('Ingresa un número'));
for (let i = 5; i <= num; i += 5) {
  console.log(i);
}
​
​
// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// let num1 = Number(prompt('Ingresa un número entre 1 y 50'));
// let num2 = Number(prompt('Ingresa otro número por favor'));
// for (let i = 1; i <= 50; i++) {
//   if (i == num1 || i == num2) {
//     console.log(i + ' ' + "¡Lotería!");
//   } else {
//     console.log(i);
//   }
// }
​
​
// Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
// const numeros = [];
// do {
//   let num = prompt('Ingresa un número (0 para terminar)').trim();
​
//   if (num === '0') break;
//   if (num === '') continue;
​
//   num = Number(num);
//   if (!isNaN(num)) numeros.push(num);
// } while (true)
​
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }
​
// Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
// let resultado = '';
// do {
//   let input = prompt('Ingresa letras o palabras (deje vacío para terminar)').trim();
//   if (input === '') break;
​
//   resultado = resultado + ' ' + input;
// } while (true)
​
// console.log(resultado);
​
​
// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
// let mensajes = {
//   lunes: 'Este es un mensaje super personalizado para el día lunes!',
//   martes: 'Este es un mensaje super personalizado para el día martes!',
//   'miércoles': 'Este es un mensaje super personalizado para el día miércoles!',
//   'miercoles': 'Este es un mensaje super personalizado para el día miércoles!',
//   jueves: 'Este es un mensaje super personalizado para el día jueves!',
//   viernes: 'Este es un mensaje super personalizado para el día viernes!',
//   sabado: 'Este es un mensaje super personalizado para el día sábado!',
//   'sábado': 'Este es un mensaje super personalizado para el día sábado!',
//   domingo: 'Es domingo, ve a descansar'
// };
// do {
//   let input = prompt('Ingresa un día de la semana').trim().toLowerCase();
//   if (mensajes.hasOwnProperty(input)) {
//     console.log(mensajes[input]);
//   }
  
//   if (input == 'domingo') break;
// } while (true)