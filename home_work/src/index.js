
function TodoCreate () {

    this.tasks = []
}

TodoCreate.prototype.createTask = function(taskName) {

    const note = {
        name: taskName,
        active: false,
        date: new Date().toLocaleString()
    }
    this.tasks.push(note)
}

TodoCreate.prototype.deleteTask =  function (name, apply) {

    if (apply) {
        this.tasks = this.tasks.filter(note => note.name !== name) 
    }  
}

TodoCreate.prototype.editTask = function (taskName, newText, confirm) {

    if (confirm) {
        this.tasks = this.tasks.map(function(note) {

            if (note.name === taskName) {
                note.text = newText
            }
            return note
        })
    }   
}

TodoCreate.prototype.showInfoAboutTasks = function () {

    return this.tasks.reduce((accum,note) => {
        if (note.active) {
            accum.activeTask++
        }
         return accum

    },{ totalTask: this.tasks.length, activeTask: 0})
}

TodoCreate.prototype.completedTask = function (name) {

    this.tasks = this.tasks.map(function (note) {
        if (note.name === name) {
            note.active = true  
        }
        return note
    })  
}

let todoList = new TodoCreate()

todoList.createTask('task1')
todoList.createTask('task2')
todoList.completedTask('task1')

console.log(todoList)

todoList.editTask('task1','newtext,',true)

console.log(todoList.showInfoAboutTasks());


