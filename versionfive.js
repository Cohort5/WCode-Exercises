//v5 Requirements
//displayTodos should show .todoText
//displayTodos should tell you if .todo is empty
//displayTodos should show .completed

//first displayTodos should show .todoText
var todoList = {
  todos: [],  
  displayTodos: function() {
      console.log("My Todos:" );
      for (var i = 0; i < this.todos.length; i++) {
          console.log(this.todos[i].todoText);
    } //displayTodos should show .todoText in forloop
  },
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
    this.todos.splice(positon, 1);
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

//second displayTodos should tell you if .todo is empty
var todoList = {
  todos: [],  
  displayTodos: function() {
        if (this.todos.length === 0) { //if this.todos.length === 0  stricts form in js to compare values, more precise
          console.log("Your todo list is empty!");
        } else {
          console.log("My Todos:" );//print todos as normal
        for (var i = 0; i < this.todos.length; i++) {
          console.log(this.todos[i].todoText);
      }
    }
  },
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
    this.todos.splice(positon, 1);
    this.displayTodos();
  },//todoList.changeTodo should change todoText property
  toggleCompleted: function(positon) {  //method
  var todo = this.todos[positon];
  todo.completed = !todo.completed;
  this.displayTodos();
  }
};

//III displayTodos should show .completed
var todoList = {
  todos: [],  
  displayTodos: function() {  //one method, forloop and if else staements combined
        if (this.todos.length === 0) { //if this.todos.length === 0  stricts form in js to compare values, more precise
          console.log("Your todo list is empty!");
        } else {
          console.log("My Todos:" );//print todos as normal
        for (var i = 0; i < this.todos.length; i++) {  //combining for loop
        if (this.todos[i].completed === true) {  // check if .completed is true
          console.log("(x)" , this.todos[i].todoText);   // print (x)
      } else {
          console.log("( )" , this.todos[i].todoText);   // print ( )
        }  
      }  
    }  
  }, //one method, forloop and if else staements combined
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
    this.todos.splice(positon, 1);
    this.displayTodos();
  },//todoList.changeTodo should change todoText property
  toggleCompleted: function(positon) {  //method
  var todo = this.todos[positon];
  todo.completed = !todo.completed;
  this.displayTodos();
  }
};