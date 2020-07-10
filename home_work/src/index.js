function odd (myArray) {
    let newArray = []
    for (let i = 0; i < myArray.length; i++) {
        
        if (myArray[i] % 2 != 0) {
            
            newArray.push(myArray[i])
        }
        
    } return newArray

}

alert(odd([1,2,3,4,5,6,7,8]))




// function even (myArray) {

//     let newArray = []

//     for (let i = 0; i < myArray.length; i++) {
        
//         if (myArray[i] % 2 == 0) {
            
//             newArray.push(myArray[i])
//         }
        
//     } return newArray
// }
// alert(even([1,2,3,4,5,6,7,8]))




// let needArray = [[1,2,3,4],[5,6,7,8]]

// function flat (myArray) {
    
//     newArray = []

//     for (let i = 0; i < myArray.length; i++) {
        
//         for (let k = 0; k < myArray[i].length; k++) {
        
//            newArray.push(myArray[i][k]) 
//         } 
//     } return newArray
// }
// alert(flat(needArray))
