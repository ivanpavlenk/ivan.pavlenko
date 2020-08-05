
function TodoCreate () {

    this.tasks = []
}

TodoCreate.prototype.createTask = function(taskName,taskDate) {

    taskDate = new Date().toLocaleString();

    const note = {

        name: taskName,

        completed: false,

        date: taskDate
    }

    this.tasks.push(note)
    
}

TodoCreate.prototype.deleteTask =  function (name, apply) {

    if (apply === true) {

        this.tasks = this.tasks.filter(note => note.name !== name) 
    }  
}

TodoCreate.prototype.editTask = function (taskName, newText, confirm) {

    if (confirm === true) {
        
        this.tasks = this.tasks.map(function(task) {

            if (task.name === taskName) {

            task.text = newText
        }
            return task
        })
    }
    
}

TodoCreate.prototype.showInfoAboutTasks = function () {

    let allTask = 0;

    let activeTask = 0;
    
    let completedTask = 0;

    for (const [key,value] of Object.entries(this.tasks)) {

         allTask++;

         if (value.completed !== true) {

             activeTask++;
             
         } else completedTask++;

    }

    console.log(`Всего задач - ${allTask}. Активных - ${activeTask}. Сделано - ${completedTask}`)
}



let todoList = new TodoCreate()

todoList.createTask('task1')
todoList.createTask('task2')
todoList.showInfoAboutTasks()
console.log(todoList)
todoList.deleteTask('task2',true)
todoList.editTask('task1','newtext,',true)



console.log(todoList)



let todoList2 = new TodoCreate()
todoList2.createTask('task4')
todoList2.createTask('task5')
todoList2.showInfoAboutTasks()
console.log(todoList2)
todoList2.deleteTask('task5',true)
todoList2.editTask('task4','newtext,',true)


console.log(todoList2)

















































































































