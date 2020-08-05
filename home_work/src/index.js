
let toDo = {
   
    items: [],

    createNewTask: function (taskName,taskStatus,taskText,taskDate){

        taskDate = new Date().toLocaleString();

        if (toDo.items.length > 0) {

            for (const [key,value] of Object.entries(toDo.items)) {

                if (value.name !== taskName) {

                   let task = Object.create(
                    {},
        
                    {
                        name:{
                            value: taskName
                        },
        
                        status: {
                            value: taskStatus,
                            writable: true,
                        },
        
                        date: {
                            value: taskDate
                        },
        
                        text: {
                            value: taskText,
                            writable:  true
                        }
        
                    });
                this.items.push(task);
                    
                }
            }
            
        }
        else {
            let task = Object.create(
                {},
    
                {
                    name:{
                        value: taskName
                    },
    
                    status: {
                        value: taskStatus,
                        writable: true,
                    },
    
                    date: {
                        value: taskDate
                    },
    
                    text: {
                        value: taskText,
                        writable:  true
                    }
    
                });
            this.items.push(task);
        }
    },

    deleteTask: function (name, apply) {

            if (apply === true) {

                this.items = this.items.filter(task => task.name !== name ) 
            }  
        },
        
    editTask: function (taskName, newText, confirm) {

        if (confirm === true) {
            
            this.items = this.items.map(function(task) {

                if (task.name === taskName) {

                    task.text = newText
                }
                return task
            })
        }
       
    },

    showInfoAboutTasks: function () {

        let allTask = 0;

        let activeTask = 0;
        
        let completedTask = 0;

        for (const [key,value] of Object.entries(toDo.items)) {

             allTask++;

             if (value.status === true) {

                 activeTask++;
                 
             } else completedTask++;

        }
        console.log(`Всего задач - ${allTask}. Активных - ${activeTask}. Сделано - ${completedTask}`)
    }

}

toDo.createNewTask('task1', true, 'do bla bla bla');
toDo.createNewTask('task2', false, 'do bla bla bla');
toDo.editTask('task1', 'dfhdfh',true)
console.log(toDo.items);
toDo.deleteTask('task2', true);
toDo.editTask('task1','fghfghfghfghfghfghfghfghfgh', true)
console.log(toDo.items);





    
    
    