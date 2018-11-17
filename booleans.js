//todoList.addTodo should add objects
//todoList.changeTodo should change todoText property
//todoList.toggleCompleted should change the completed property set to true or false

var todoList = {
  todos: [],  
  displayTodos: function() {
      console.log("My Todos" , this.todos);
  }, //todoList.addTodo should add objects
  addTodo: function(todoText) {
      this.todos.push({
      todoText: todoText,
      completed: false 
      });
      this.displayTodos();
  }, //todoList.addTodo should add objects
  changeTodo: function(positon, todoText) {
      //this.todos[positon] = newValue;
      this.todos[positon].todoText = todoText;
      this.displayTodos();
  },
  delteTodo: function(positon) {
    this.todo.splice(positon, 1);
    this.displayTodos();
  },//todoList.changeTodo should change todoText property
  toggleCompleted: function(positon) {  //method
  var todo = this.todos[positon];
  todo.completed = !todo.completed;
  this.displayTodos();
  }
};

{
    todo.Text: "Item 1",
    completed: false   // Boolean value's either true or false
}

!true changes to false !false changes to ture, using bang operator(!)





//todoList.toggleCompleted should change the completed property set to true or false
