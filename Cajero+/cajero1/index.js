var cuentas=[];
var cuenta;

// teclado números
function input(boton){
    console.log(activeInput);
   var numberInput=document.getElementById(activeInput);
   
   numberInput.value=numberInput.value+boton.value;
    console.log(boton.value);

}

//teclado delete
function deleteLastCharacter(){
    var numberInput=document.getElementById(activeInput);
    numberInput.value=numberInput.value.substr(0,numberInput.value.length-1);// lo que hace es crear un substring de length-1 y asi se borra el ultimo dato
 }

 // cual input esta activo
 function activeInputSave(element){
    activeInput=element.id;
    console.log(activeInput);

}


class Cuenta{
    constructor(numeroDeCuenta,datosPersonales,saldo,password){
        this.numeroDeCuenta=numeroDeCuenta;
        this.datosPersonales=datosPersonales;
        this.saldo=saldo;
        this.password=password;
    
    }
    
    consultarSaldo(){
        return `El saldo en cuenta es de: $${this.saldo}.00 MXN` 
    }

    depositarMonto(cantidad){
      
        let saldoNuevo= (this.saldo*1)+(cantidad*1);// el *1 me lo convierte a numbero, se mete como string
        console.log(saldoNuevo);
        if (saldoNuevo<=990){
            this.saldo=saldoNuevo;
            return `Se ha depositado con éxito la cantidad de:<br/> $${cantidad}.00 MXN <br/> <br/> Saldo actual: ${this.saldo}.00 MXN `
        }else{
            alert (`La cantidad que desea ingresar sobrepasa el saldo máximo de $990.00 MXN. Favor de ingresar una cantidad menor a $${990-this.saldo}.00 MXN.`)
            return " "
        }
       }

   retirarMonto(cantidad){
    let saldoNuevo= this.saldo-cantidad;
    console.log(cantidad);
   
    if (saldoNuevo>=10){
        this.saldo=saldoNuevo;
        return `Se ha retirado con éxito la cantidad de:<br/> $${cantidad}.00 MXN <br/> <br/> Saldo actual: ${this.saldo}.00 MXN `
    }else{
        alert( `Esta intentando retirar una cantidad mayor a la permitida. Favor de retirar un monto máximo de $${this.saldo-10}.00 MXN. `)
        return " "
    }
   }

   loginCuenta(password){
       if(this.password==password){
           return true
       }else {
        console.log("La password es incorrecta");
           return("La password es incorrecta")
           
    
    
       }

   }
   
}



function inicializarCuentas(){

var C0001= new Cuenta("0001","Mali",200,"4567");
var C0002= new Cuenta("0002","Gera",310,"2333");
var C0003= new Cuenta("0003","Maui",700,"1234");
var C0004= new Cuenta("0004","Magda",700,"5122");
cuentas.push(C0001,C0002,C0003,C0004);


}


function validarCuenta(){
    
    inicializarCuentas();
    requestCuenta=document.getElementById("numeroDeCuenta");
    requestNIP=document.getElementById("NIP")   
   
    for(let i=0;i<cuentas.length;i++) {
        
        if(cuentas[i].numeroDeCuenta==requestCuenta.value){
            cuenta=cuentas[i];
            break;

        }else if(cuentas[i].numeroDeCuenta!=requestCuenta.value && i==cuentas.length-1){
            alert("No se encontró la cuenta");
            requestCuenta.value="";
            requestNIP.value="";
        }
    }

   
    if( cuenta.loginCuenta(requestNIP.value)==true){
        window.location.href=`operaciones.html?${cuenta.numeroDeCuenta}-${cuenta.datosPersonales}-${cuenta.saldo}-${cuenta.password}`;
    
    }else{
        alert("El Pin es incorrecto");
        cuentaRequest.value="";  
    }
    
}



function importarCuentas(){
    let cuentasImportar=location.search.substring(1);

    let a=cuentasImportar.split("-");
    a[1]=a[1].replace("%20"," ");
    cuenta= new Cuenta(a[0],a[1],a[2],a[3]);

    infoUsuario();
}

function infoUsuario(){
    let objt=document.getElementById("usuarioOperaciones");
    objt.innerHTML=`<span class="bold etiqueta">Numero de cuenta: </span>${cuenta.numeroDeCuenta}<br><span class="bold etiqueta"> Nombre:</span> ${cuenta.datosPersonales}`;

 }





function saldo(){
   
    console.log(cuenta);
    let respuesta=document.getElementById("textoResultado");
    respuesta.innerHTML=cuenta.consultarSaldo();
      // console.log(requestCuenta.consultarSaldo());

   }
   
   function retirar(){
   
       //let cantidad=prompt("cuanto quieres retirar");
       let cantidad=document.getElementById("inputRetiro");
       
       let respuesta=document.getElementById("textoResultado");
       respuesta.innerHTML=cuenta.retirarMonto(cantidad.value);
       
       cantidad.value="";
      
   }

   function depositar(){
    let cantidad=document.getElementById("inputDeposito");

    let respuesta=document.getElementById("textoResultado");
    respuesta.innerHTML=cuenta.depositarMonto(cantidad.value);

    cantidad.value="";
}

function irA(nombre){

    if(nombre=="index"){
        window.location.href="index.html"
    }else
        window.location.href=`${nombre}.html?${cuenta.numeroDeCuenta}-${cuenta.datosPersonales}-${cuenta.saldo}-${cuenta.password}`;
          
}
   

