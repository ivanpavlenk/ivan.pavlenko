


function plural(heightTriangle , symbol) {

    heightTriangle = +prompt('Введите число');

    symbol = prompt('Введите символ');
    
    let space = ' ';
    let maxSymbols = heightTriangle * 2 - 1;

    if( typeof heightTriangle === 'number' && symbol.length === 1) {
        
        for (let i = 1; i <= maxSymbols; i += 2) {

                let spaces = (maxSymbols-i)/2;

                console.log(space.repeat(spaces) + symbol.repeat(i))
             
        }
    }     
}

plural()






