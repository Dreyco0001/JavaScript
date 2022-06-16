// let numbers = [10, 2, 20, 4, 5, 6, 7, ];

// //este codigo permite sumar el numero indicado por uno al array (en este caso el de arriba)
// let add =value => value + 1;

// let copy = numbers.map(add);

// console.log (copy)
// console.log (numbers)


// Ejercicios
// 1.- A partir del siguiente arreglo de animalitos:
    const animalitos = [
    { nombre: 'carlitos'  , especie: 'conejo' },    
    { nombre: 'esteban'   , especie: 'perro' },     
    { nombre: 'fabiruchis', especie: 'tortuga' },   
    { nombre: 'anita'     , especie: 'gato' },      
    { nombre: 'miranda'  , especie: 'conejo' },    
    { nombre: 'lucas'    , especie: 'conejo' },   
    { nombre: 'Horacia'   , especie: 'tortuga' }    
    ];
const SoloConejos = conejo => conejo.especie == 'conejo';
console.log(animalitos)
console.log (animalitos.filter(SoloConejos))

    // Genera un nuevo arreglo en el que solo se encuentren
    // los conejos del arreglo original.



// 2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: 'Bimbo',    especie: 'Hamster', comidasFavoritas: ['Semillas', 'Nueces'] },
        { nombre: 'Ludovico', especie: 'Perro',   comidasFavoritas: ['Huesos', 'Jamon'] },
        { nombre: 'Pavlov',   especie: 'Perro',   comidasFavoritas: ['Croquetas', 'Pollo'] },
        { nombre: 'Chancla',  especie: 'Gato',    comidasFavoritas: ['Atun', 'Pescado'] },
        { nombre: 'Don Pepe', especie: 'Perico',  comidasFavoritas: ['Semillas'] }
    ];


    const MascotasNombre = nombrePets => nombrePets.nombre

    console.log (mascotas)
    console.log(mascotas.map(MascotasNombre))



    // Genera un nuevo arreglo que contenga los nombres de todas
    // las mascotas.





    
    // const obtenerNombre = mascotas => mascotas.nombre;
    // let nombreMascotas  = todasLasMascotas.map(obtenerNombre);
    // console.log(nombreMascotas) no funciono