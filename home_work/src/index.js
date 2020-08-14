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
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(note => note.name !== taskName)
    }
}


class TodoList extends List {

    completed(taskName) {
        this.tasks = this.tasks.map(function (note) {
            if (taskName === note.name) {
                note.completed = true
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
todoList.completed('task');

console.log(todoList)



listSearch.addTask('task1')
listSearch.addTask('task2')
listSearch.addTask('task3')
listSearch.deleteTask('task1')
listSearch.search('task3')

console.log(listSearch)
