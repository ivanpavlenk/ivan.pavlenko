function myPadString(myString , stringLength , addSimbol, flag) {

    let minMax = stringLength - myString.length
    let str = ''

     if (stringLength > myString.length && flag == true) {
       
        for (let i = 0; i < minMax; i++) {
            
             myString = myString.concat(addSimbol)
        } 

    } else if  (stringLength > myString.length && flag == false) {

        for (let i = 0; i < minMax; i++) {

            str += addSimbol 
        }
        myString = str + myString


    } else myString = myString
    
   console.log (myString)
}

myPadString('hello', 7, '*', true);





// function getResult(a,b,mathSymbol) {

//     return eval(a + mathSymbol+ b)
    
// }

// alert(getResult(2,2,'+'))





// function isCharPresent(myString,needSymbol) {
    
//     for (let i = 0; i < myString.length; i++) {

//         console.log(myString[i])

//         if (myString[i] === needSymbol) return true

//     } return false
// }

// alert(isCharPresent('hello','l'))








