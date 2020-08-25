
  let todo = {
   
    items: [],

    auth: function (){

        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({"value":"Test user"})

        fetch("https://todo.hillel.it/auth/login",{
            headers: myHeaders,
            method: 'POST',
            body: raw
                 
        })
        .then(response => response.json())
        .then(response => {
            return localStorage.setItem('token',response.access_token)
        })     
    },

    initUsers: function () {

        let authHeader = new Headers();
        authHeader.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
        let requestOptions = {
            method: 'GET',
            headers: authHeader,
            redirect: 'follow'
        }       

         fetch("https://todo.hillel.it/todo", requestOptions)
        .then(response => response.json())
        .then(result => this.items.push(result))
            
    },


    createTodo: function (newVal,prior) {
        let newNote = {
        
            "value": newVal,
            "priority": prior  
       }

       newNote = JSON.stringify(newNote)
       let addHeaders = new Headers();
       addHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
       addHeaders.append("Content-Type", "application/json");
     
       var requestOptions = {
            method: 'POST',
            headers: addHeaders,
            body: newNote,
            redirect: 'follow'
       };
       
       fetch("https://todo.hillel.it/todo", requestOptions)
       .then(this.initUsers())     
    },

    deleteTodo: function (id) {

        let deleteHeaders = new Headers();
        deleteHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

        let requestOptions = {
            method: 'DELETE',
            headers: deleteHeaders,
            redirect: 'follow'
        }       

         fetch(`https://todo.hillel.it/todo/${id}`, requestOptions)
         .then(this.initUsers())
            
    }
}

todo.deleteTodo(2499)
console.log(todo)

