


function plural(heightTriangle , symbol) {

    heightTriangle = +prompt('Введите число');

    symbol = prompt('Введите символ');
    
    let space = ' ';

    if( typeof heightTriangle === 'number' && symbol.length === 1) {

        for (let i = 1; i <= heightTriangle; i++) {
    
            console.log(space.repeat(heightTriangle - i ) + symbol.repeat(i)) 
        }
    }     
}

plural()



