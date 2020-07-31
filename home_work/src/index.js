// function sum() {

//     let countSum = 0

//     return function (n) {

//         return countSum += n
//     }
// }

// mySum = sum();


// console.log(mySum(3))

// console.log(mySum(5))








function makeCounter() {

    let count = 0;
    let step = 0;

  function counter() {
    return count+=step;
  }

  counter.step = function(value) {
    step = value;
  };

  counter.reset = function() {
    count = 0;
    step = 0;
  };

  return counter;

  }

myCount = makeCounter();
myCount.step(3);
console.log(myCount())
console.log(myCount())
myCount.reset()
console.log(myCount())







  


  



