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
        
        let result = []
        for (const key in this.tasks) {
            for (const j in this.tasks[key]) {

                if (this.tasks[key][j] === val)  {
                    result.push(this.tasks[key])
                }
            }
        }
        return result
    }

}


let todoList = new TodoList({
    tasks: []
})

todoList.addTask('task');
todoList.addTask('task2');
todoList.completed('task');
console.log(todoList.search(false));



