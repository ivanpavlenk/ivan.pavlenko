// let arr = [1,2,3,4,5]

// function myMap(array , callBack) {

//     let newArr =[];

//     for (let i = 0; i < array.length; i++) {
        
//         newArr.push(callBack(array[i]));
        
//     }   
//     return newArr
// }

// alert(myMap(arr , function (elem) {

//     return elem * 2
// }))






// let arr = [1,2,3,4,5]

// function myFilter(array , callBack) {

//     let newArr =[];

//     for (let i = 0; i < array.length; i++) {
//         let condition = callBack(array[i])

//         if (condition === true) {
            
//             newArr.push(array[i]);
//         } 
//     }   
//     return newArr
// }

// alert(myFilter(arr , function (elem) {

//     return elem * 2 < 10
// }))





const notification = [

    {
   
     date: '31/07/2019',
   
     msg: 'Some message here'
   
    },

    {
   
        date: '31/07/2019',
      
        msg: 'Some message here2'
      
    },


    {
   
        date: '31/07/2017',
      
        msg: 'Some message here3'
      
    },
   
   ];

        function getGroup(arr , groupBy) {
            
            return arr.reduce(function(acc, item) {

                let key = item[groupBy]
        
                if (!acc[key]) {
        
                    acc[key] = []
                }
        
                acc[key].push(item)
    
                    return acc
        
               },{})

        }

        let newArr = getGroup(notification,'date')

        console.log(newArr);

       
       
    
    

