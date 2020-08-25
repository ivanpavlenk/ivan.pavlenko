
let toDo = {
   
    items: [],

    createNewTask: function (taskName,taskText){

        const task = {
            name: taskName,
            status: true,
            text: taskText
        }

        this.items = this.items.filter(function (task) {
             return task.name !== taskName   
        })

        this.items.push(task);
    },

    deleteTask: function (name, apply) {

            if (apply) {
                this.items = this.items.filter(task => task.name !== name ) 
            }  
        },
        
    editTask: function (taskName, newText, confirm) {

        if (confirm) {
            
            this.items = this.items.map(function(task) {

                if (task.name === taskName) {

                    task.text = newText
                }
                return task
            })
        }
       
    },

    showInfoAboutTasks: function () {

       return this.items = this.items.reduce((accum,task) => {

            if (task.status) {
                accum.activeTask++
            }
            else {
                accum.completed++
            }
            return accum

        },{allTask: this.items.length, activeTask: 0, completed: 0})
       
    }
}

toDo.createNewTask('task1', 'do bla bla bla');
toDo.createNewTask('task2', 'do bla bla bla');
toDo.editTask('task1', 'dfhdfh',true);

console.log(toDo.items);



console.log(toDo.showInfoAboutTasks());
















    
    
    