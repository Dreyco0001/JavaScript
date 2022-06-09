let color = 'verde';
function cambiarColor() {

    document.body.innerHTML= '';

    if(color == 'rojo') {
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR2CwvylehEloxiXt9187pbMqj_8CWLPp9g&usqp=CAU"></img>');

        color = 'verde'

    }else if (color == 'verde') {
        document.write( '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4snmmntoWQE5XYW7sHGluQhvl5BStFlu-gg&usqp=CAU"></img>');

        color = 'amarillo';
    } else {
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAe3CwMcaCavrw-8h7wpdRoRHsXQZaDmNbCg&usqp=CAU"></img>');
        color = 'rojo';

    }

    setTimeout(cambiarColor, 2000);

}

cambiarColor();