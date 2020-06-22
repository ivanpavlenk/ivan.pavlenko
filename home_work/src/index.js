let age = +prompt('сколько вам лет');

if ( age % 10 == 1 || age % 100 == 1){

    alert('Вам  '+ age + '  год' );

}else if (age >= 5 && age < 20 ){

    alert('Вам  '+ age + '  лет' );

}else if ( age % 10 >= 5 && age % 10 <= 10 ){

    alert('Вам  '+ age + '  лет' );

}else if ( age % 10 == 0 || age % 100 == 0){

    alert('Вам  '+ age + '  лет' );

}else alert('Вам  '+ age + '  года' );

