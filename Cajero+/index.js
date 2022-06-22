var cuentas = [
    {nombre: "Mali", saldo: 200, contraseña: "1515"},
    {nombre: "Gera", saldo: 290, contraseña: "1218"},
    {nombre: "Maui", saldo: 67, contraseña: "1234"},
]
let Mali = {Saldo: 200, contraseña: "1515"};

let Gera = {Saldo: 290, contraseña: "1218"};

let Maui = {saldo:67, contraseña: "1234"};




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