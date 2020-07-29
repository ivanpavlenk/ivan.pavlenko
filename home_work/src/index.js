let user = {

    name: 'Ivan',

    surname: 'Pavlenko',

}

let user2 = {

    name: 'Oleg',

    surname: 'Ivanov'

}

 function Mybind(func, context, ...arrayArgs) {

    return function (...argums) {

        return func.apply(context, arrayArgs.concat(argums))
        
    }

 }

  function fullName (age) {
    
    console.log(`Name - ${this.name}. Surname - ${this.surname}`)
    console.log(`Age - ${age}`)
}





fullName.bind(user2,43)()

    
Mybind(fullName, user2, 43)()

 

