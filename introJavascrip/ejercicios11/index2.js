//Hacer una función que muestre la tabla de multiplicar de un número
/*
var multi = prompt("Ingresa un número del cual sacar la tabla de multiplicar hasta el 10")

function tablaMult(number) {

    var res = ""
    var cont =1

    for (let index = 0; index < 10; index++) {
        
        res += parseInt(number)+" X "+parseInt(cont)+" = "+(number*cont)+"\n"
        cont++
    }

    return res;
}

console.log(tablaMult(multi))
*/

//Leer un arreglo de enteros y obtener su promedio

/*
var arreglo = [1,2,3,4,5,6]

function sumatoria(arreglo) {
    
    var sumatoria=0
    var promedio=0

    for (let index = 0; index < arreglo.length; index++) {
        
        var x = arreglo[index]
        sumatoria = x + sumatoria

    }

    promedio = sumatoria / arreglo.length

    return "La sumatoria es igual a ="+ sumatoria + "\n" + "El número de enteros en el arreglo es ="+ arreglo.length + "\n" + "El promedio es igual a ="+ promedio + "\n"
            
}

console.log(arreglo)

console.log(sumatoria(arreglo))
*/

//Crear una funcion que reciba como parametro una oración y defina si es palindromo
/*
var string =  prompt("Ingresa una oración o palabra")

function esPalindromo(str) 
{
    var alReves = str.split('').reverse().join('')

    if (String(str) == String(alReves)) {
        return "La palabra que ingresaste si es un palindromo ya que : "+str+" al revés es : "+alReves+" y son lo mismo :)"
    } else {
        return "La palabra que ingresaste no es un palindromo ya que : "+str+" al revés es : "+alReves+" son diferentes"
    }
}

console.log(esPalindromo(string))
*/
//Escribe una función que halle el máximo entre tres números

/*
var n1 = prompt("Ingresa un primer número")
var n2 = prompt("Ingresa un segundo número")
var n3 = prompt("Ingresa un tercer número")

function mayorDe(numero1,numero2,numero3) {
    
    if(numero1>numero2 && numero1>numero3){
        return numero1
    }

    if(numero2>numero1 && numero2>numero3){
        return numero2
    }

    if(numero3>numero2 && numero3>numero1){
        return numero3
    }
}

console.log("El número mas grande entre "+n1+" "+n2+" y "+n3+" es = "+mayorDe(n1,n2,n3))
*/

/*Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.*/
/*
var precio = prompt("Ingresa el precio")
var iva = prompt("Ingresa el iva (en porcentaje%)")

function totalConIVA(precio,IvA) {
    var descuento = 0
    var total = 0
    if (String(IvA)=="") {
         descuento = precio*0.21
         total = precio-descuento
         return total
    }else{
        descuento = precio*(IvA/100)
        total = precio-descuento
        return total
    }
}
*/
//Crea una función que reciba un texto y lo devuelva al revés
/*
var string =  prompt("Ingresa una oración o palabra")

function reverseWord(str) {
    var alReves = str.split('').reverse().join('')

    return "La palabra que ingresaste  es -"+str+"- al revés es : --"+alReves+"--"
    
}

console.log(reverseWord(string))
*/

/*Escribe una función que imprima una
   pirámide de astericos como la siguiente:
                   *
                  * *
                 * * *
                * * * *
               * * * * *  
*/
/*
var numeroPisos = prompt("Ingresa el número de pisos de tu pirámide")
function pyramid(number) {
    for (let i = 0; i < number; i++) {
      let piso = '';
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      console.log(piso)
    }
  }
pyramid(numeroPisos)*/