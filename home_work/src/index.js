
let arr = [1,2,3,[4,5,6,7],8,9,]

let wrapper = document.querySelector('.wrapper')


function generateList(array) {

    let list = document.createElement('ul')

   for (let i = 0; i < array.length; i++) {

       if (!Array.isArray(array[i])) {

            let listItem = document.createElement('li')
            listItem.innerHTML = array[i]
            list.append(listItem)
        }

        else  {

            let newList = document.createElement('ul')
            let innerLi = document.createElement('li')

            for (let k = 0; k < array[i].length; k++) {
                let newListItem = document.createElement('li')
                newListItem.innerHTML = array[i][k]
                newList.append(newListItem)
                
            }

            innerLi.append(newList)
            list.append(innerLi)
             
        }   
   }

    wrapper.append(list)
}

generateList(arr)




function generateTable() {

    let table = document.createElement('table')
    let numbers = 1
    for (let i = 1; i <= 10; i++) {
       
        let tableRow = document.createElement('tr')
       
        for (let k = 1; k <= 10; k++) {
          
            let tableColumn = document.createElement('td')
            tableColumn.innerHTML = numbers
            tableRow.append(tableColumn)
            numbers++
        }  
        table.append(tableRow)
    }
    wrapper.append(table)   
}

generateTable()
