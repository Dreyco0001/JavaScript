// var cuentas = [
//     saldo = 500,
//     {nombre: "Mali", saldo: 200, contraseña: "1515"},
//     {nombre: "Gera", saldo: 290, contraseña: "1218"},
//     {nombre: "Maui", saldo: 67, contraseña: "1234"},
// ]

var cuentas = {nombre: "Mali", saldo: 200, contraseña: "1515"}

//si tienes problemas avisame porfa
//tratar de hacer que el input funcione con los nombres

function checkBalance() {
    // let Mali = {nombre: "Mali", saldo: 200, contraseña: "1515"}
    // let Gera = {nombre: "Gera", saldo: 290, contraseña: "1218"}
    // let Maui = {nombre: "Maui", saldo: 67, contraseña: "1234"}
    
    console.log("tu saldo es: $" + cuentas.saldo);
}


let selectionMove = parseInt(prompt("Selecciona una de las siguientes Opciones \n1. Consultar saldo. \n2.Ingresar monto \n3.Retirar Monto"))

console.log(selectionMove)

//opciones de prue
switch(selectionMove) {
    case 1:
        checkBalance()
      break;
    case 2:
        console.log("vamos a la mitad")
      break;

    case 3:
        console.log("Ya casi acabamos")
    default:
      if (selectionMove != 1 && selectionMove != 2 && selectionMove != 3)
      console.log("opcion invalida")

  }



const input = document.getElementById ("name")
console.log (input.value)



let Form  = document.getElementById ("Form")
Form.addEventListener  ("submit", function(event)  {
   event.preventDefault ()
    console.log (input.value)  
})


// function mostrar() {
//     var x = document.getElementById("name1").innerHTML;
//     document.getElementById("name").innerHTML = X;
// } 









// var nombre = prompt("nombre de usuario", "");

// if valor == ""