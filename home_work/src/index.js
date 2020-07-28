// function sum() {

//     let countSum = 0

//     return function (n) {

//         return countSum += n
//     }
// }

// mySum = sum();


// console.log(mySum(3))

// console.log(mySum(5))








function makeCounter(firstValue) {

    let count = firstValue
  
    return {

        step(stepCount) {

            return count += stepCount
        
        },

        resetCount() {
            return count = 0

         }


    };
  }

myCount = makeCounter(0);

console.log(myCount.step(3));

console.log(myCount.step(3));

console.log(myCount.resetCount())

console.log(myCount.step(1));




  


  



