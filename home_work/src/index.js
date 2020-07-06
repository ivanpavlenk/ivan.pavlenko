function showTriangle(number,symbol) {

    symbol = symbol || '*';

    console.log(symbol)

    if (symbol.length === 1) {
    
        let triangle = ''

        for (let i = 1; i <= number; i++) {

        triangle += symbol.repeat(i) +'\n';
    } 
    
    return triangle

    } else alert('Введите только один символ!')     
}

alert(showTriangle(6,'*'))













