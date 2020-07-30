
let ToDo = {
   
    items: [],

    createNewTask: function (taskName,taskStatus,taskText,taskDate){

        taskDate = new Date().toLocaleString();

        if (ToDo.items.length > 0) {

            for (const [key,value] of Object.entries(ToDo.items)) {

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

        for (const [key,value] of Object.entries(ToDo.items)) {
            
            if (value.name === name && apply === true) {

                delete this.items[key]
            }
           
        } 
    },

    editTask: function (taskName, newText, confirm) {

        for (const [key,value] of Object.entries(ToDo.items)) {

            if (value.name === taskName && confirm === true ) {
                
                this.items[key].text = newText
               
            }
        }
    },

    showInfoAboutTasks: function () {

        let allTask = 0;

        let activeTask = 0;
        
        let completedTask = 0;

        for (const [key,value] of Object.entries(ToDo.items)) {

             allTask++;

             if (value.status === true) {

                 activeTask++;
                 
             } else completedTask++;

        }
        console.log(`Всего задач - ${allTask}. Активных - ${activeTask}. Сделано - ${completedTask}`)
    }

}

ToDo.createNewTask('task1', true, 'do bla bla bla');
ToDo.createNewTask('task2', false, 'do bla bla bla');
ToDo.editTask('task1', 'dfhdfh',true)
ToDo.showInfoAboutTasks()
console.log(ToDo.items);




    
    
    