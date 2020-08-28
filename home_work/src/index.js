class TodoList  {

    constructor (baseUrl){

        this.baseUrl = baseUrl
        this.notes = []
        this.token = null
    }

    auth(mail) {
        if (mail.trim()) {
            fetch(`${this.baseUrl}/auth/login`, {

                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    value: mail
                })
               
            })
            .then(data => data.json())
            .then(data => {
                return localStorage.setItem('token',data.access_token)
            })
            .then(this.token = localStorage.getItem('token')) 
        }  
    }

    initTodo() {
        fetch(`${this.baseUrl}/todo`,{
            method: 'GET',
            headers:{ Authorization: `Bearer ${this.token}`}
        })
        .then(data => data.json())
        .then(data => this.notes = data)
    }

    addNote(value,priority) {
        if (value.trim() && priority) {
            fetch(`${this.baseUrl}/todo`,{
                method: 'POST',
                headers:{ 
                    Authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    value,
                    priority
                })
            })
            .then(this.initTodo())
        } 
    }

    delete(id) {
        fetch(`${this.baseUrl}/todo/${id}`,{
            method: 'DELETE',
            headers:{ Authorization: `Bearer ${this.token}`}
        })
        .then(this.initTodo())
    }

    update(id,value,priority) {
        if (id && value.trim && priority) {
            fetch(`${this.baseUrl}/todo/${id}`,{
                method: 'PUT',
                headers:{ 
                    Authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    value,
                    priority
                })
            })
            .then(this.initTodo())
        } 
    }
}

todo = new TodoList('https://todo.hillel.it')
todo.auth('iserli35')
todo.addNote('first2',1)
todo.addNote('two3',2)
setTimeout(() =>{
    todo.update(2658,'test,', 1)
},2000)




setTimeout(() => {
    console.log(todo);
    
},7000)






