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
    
  return myString
}

alert(myPadString('hello', 7, '*', true));





// function getResult(a,b,mathSymbol) {

//      let str = (a + mathSymbol + b)

//     return Function('"use strict";return (' + str + ')')();
    
// }

// alert(getResult(2,2,'+'))





// function isCharPresent(myString,needSymbol) {
    
//     for (let i = 0; i < myString.length; i++) {

//         if (myString[i] === needSymbol) return true

//     } return false
// }

// alert(isCharPresent('hello','l'))




// function charIndexOf(myString,needSymbol) {

//     myIndex = ''

//     for (let i = 0; i < myString.length; i++) {
        
//         if (myString[i] === needSymbol) {

//             myIndex += 'index : ' + i + ' '

//         }
//     } 
    
//     return myIndex || -1
// }

// alert(charIndexOf('hollo','o'))







