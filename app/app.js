class List {

    constructor (options) {
        this.tasks = options.tasks
    }

    addTask(taskName) {
        let note = {
            name: taskName,
            completed: false,
            date: new Date().toLocaleString()
        }
        this.tasks.push(note)
        this.addStorage()  
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(note => note.name !== taskName)
        localStorage.removeItem(taskName)
    }

    addStorage() {
        let storage = this.tasks.map(function (note) {
            localStorage.setItem(note.name, JSON.stringify(note))
        })
    }

}

class TodoList extends List {

    completed(taskName) {
        this.tasks = this.tasks.map(function (note) {
            localStorage.removeItem(taskName)
            if (taskName === note.name) {
                note.completed = true
                localStorage.setItem(taskName,JSON.stringify(note))
            }
            return note
        })
    }

    statystic() {
        return this.tasks.reduce((accum,note) => {

            if (note.completed) {
                accum.completed++
            }
            return accum

        },{allTask: this.tasks.length, completed: 0 })
    }
}

class ContactList extends List {

    search(val) {
        this.tasks = this.tasks.filter(note => note.name === val || note.date === val)
    }
}


let todoList = new TodoList({
    tasks: []
})

let listSearch = new ContactList({
    tasks: []
})

todoList.addTask('task');
todoList.addTask('task2');
todoList.completed('task2')

console.log(todoList)