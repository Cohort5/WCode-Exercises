var todos = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
//It should store the todo array on an object
var todoList = {
  todos: ["Item 1","Item 2","Item 3","Item 4","Item 5"],  
};
//should have a displayTodos method
var todoList = {
  todos: ["Item 1","Item 2","Item 3","Item 4","Item 5"],  
  displayTodos: function() {
      console.log("My Todos" , this.todos);
  }
};
todoList.displayTodos();
//should have a addTodos method
var todoList = {
  todos: ["Item 1","Item 2","Item 3","Item 4","Item 5"],  
  displayTodos: function() {
      console.log("My Todos" , this.todos);
  },
  addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
  }
}; 
todoList.addTodo("Plunker");
// function addTodos(todo) {
//     todos.push(todo); add this.
//     displayTodos(); add this.
// }

//should have a changeTodos method
var todoList = {
  todos: ["Item 1","Item 2","Item 3","Item 4","Item 5"],  
  displayTodos: function() {
      console.log("My Todos" , this.todos);
  },
  addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
  },
  changeTodo: function(positon, newValue) {
      this.todos[positon] = newValue;
      this.displayTodos();
  }
}; 
todoList.changeTodo(0, "first");
// function changeTodo(positon, newValue) {
//     todos[positon] = newValue; add this
//     displayTodos(); add this
// }


//should have a deleteTodos method
//var todos = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
var todoList = {
  todos: ["Item 1","Item 2","Item 3","Item 4","Item 5"],  
  displayTodos: function() {
      console.log("My Todos" , this.todos);
  },
  addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
  },
  changeTodo: function(positon, newValue) {
      this.todos[positon] = newValue;
      this.displayTodos();
  },
  delteTodo: function(positon) {
    this.todo.splice(positon, 1);
    this.displayTodos();
  }
};
// function delteTodo(positon) {
//     todos.splice(positon, 1); add this
//     displayTodos(); add this
// }
//todo list objects, methods are simply functions within an object
//code orginaziation, grouping things together, refer to object inside a method use this.nottion
//having a good process to learning code vs. time