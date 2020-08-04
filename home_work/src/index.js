
function recursion (val, step = 0, firstVal = 0) {

    if (firstVal === 0) {

        firstVal = val
    }
    
    let reverseVal =  Number(String(val).split("").reverse().join(""));

    let accum = val + reverseVal;

    step++

    let polindrome = Number(String(accum).split("").reverse().join(""));

    if (accum === polindrome) {
        
       let obj = {
           value: firstVal,
           palinndrome: true,
           palindromeVal: polindrome,
           steps: step
       }
       return obj;
    }
    
    return recursion(accum, step, firstVal)
}


console.log(recursion(89))



    