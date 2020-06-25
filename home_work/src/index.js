


let age = +prompt('сколько вам лет');
let balanceAge = age % 100;
let balanceAge2 = age % 10

if (balanceAge >= 5 && balanceAge < 20 ){

    alert('Вам  '+ age + '  лет' );


} else {

    if (balanceAge2 == 1) {

        alert('Вам  '+ age + '  год' );

    } else if (balanceAge2 >= 2 && balanceAge2 <= 4) {

        alert('Вам  '+ age + '  года' );

    } else {
        alert('Вам  '+ age + '  лет' );
    }
}



