class TodoList {

    constructor() {

      this.list = document.querySelector('.todo-list')
      this.todoInput = document.querySelector('.todo-text')
      this.btnAddNote = document.querySelector('.add')
      this.toggleShowBtn = document.querySelector('.show-hide-complete')
    }

    todoInit() {

        this.btnAddNote.addEventListener('click', () => {
            let listItem = document.createElement('li')
            listItem.classList.add('list-item')
            listItem.setAttribute('data-complete','false')

            let listText = document.createElement('p')
            listText.innerText = this.todoInput.value
    
            let btnDone = document.createElement('button')
            btnDone.classList.add('complete-btn')
            btnDone.innerText = 'done'
            this.completeNote(btnDone)
           
            let btnDelete = document.createElement('button')
            btnDelete.classList.add('delete-btn')
            btnDelete.innerText = 'delete'
            this.deleteNote(btnDelete)
            
            let btnInner = document.createElement('div')
            btnInner.append(btnDone)
            btnInner.append(btnDelete)
            listItem.append(listText)
            listItem.append(btnInner)
            this.list.append(listItem)
            this.todoInput.value = ""
        })
    }

    deleteNote(elem) {

        elem.addEventListener('click',(event)=>{
            let target = event.target
            target.parentNode.parentNode.remove()
        })
    }

    completeNote(elem) {

        elem.addEventListener('click',function (event) {
            let target = event.target
            target.parentNode.parentNode.firstChild.classList.add('list-text')
            this.disabled = true
            target.parentNode.parentNode.setAttribute('data-complete','true')
        })
    }

    toggleShowNote() {
        this.toggleShowBtn.addEventListener('click',() => {
            let listItems = document.querySelectorAll('.list-item')
            listItems.forEach(elem => {
                if (elem.getAttribute('data-complete') === "true") {
                    elem.classList.toggle('list-item-hide')
                }
                
            })
            listItems.forEach(elem => {

                if (elem.classList.contains('list-item-hide')) {
                    this.toggleShowBtn.innerHTML = 'show complete'
                }
                else {
                    this.toggleShowBtn.innerHTML = 'hide complete'
                }
            })
        }) 

    }
  }
    
todo = new TodoList()
todo.todoInit()
todo.toggleShowNote()






