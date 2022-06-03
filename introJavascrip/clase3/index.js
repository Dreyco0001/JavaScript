var participantes = ['Ana', 'Oswaldo', 'Raul', 'Celia', 'Maria', 'Antonio'];

//cambiamos de puesto a Cecilia y Raul
console.log(participantes)
participantes[2]= 'cecilia'
participantes[3]= 'Raul'
console.log(participantes)
 
//elimina al participante antonio
console.log(participantes)
participantes.pop(5)
console.log(participantes)

//Se nos unen a la fiesta Roberto y Amaya en el top 
console.log(participantes)
console.log(participantes.splice(1,0,'Roberto','Amaya'))
console.log(participantes)


//Toma el primer puesto Marta
console.log(participantes)
participantes.unshift('Marta')
console.log(participantes)


//de izquierda a derecha se lee los puestos de los participantes
