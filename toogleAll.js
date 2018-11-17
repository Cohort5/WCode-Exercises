VSix toggle all todos
//toggleAll: If everything is true, make everything false. checked and unchecked
//toggleAll: Otherwise, make everything true. checked. need to write code for each scenario

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
  }, //create a new method for toggleAll
  toggleAll: function() {  //If everything is true, make everything false.
  var totalTodos = this.todos.length;
  var completedTodos = 0;
    
  for (var i = 0; i < totalTodos; i++) { //Get number of completed todos
      if (this.todos[i].completed === true) {
        completedTodos++;
   }
  }  
  
  //Case 1: If everything is true, make everything false.
  if (completedTodos === totalTodos) { //create the variables
        //Make everything false
        for (var i = 0; i < totalTodos; i++) {    
        this.todos[i].completed = false;
   }  
  //Case 2: Otherwise, make everything true - always use else along with for loop 
  } else {
     for (var i = 0; i < totalTodos; i++) {    
        this.todos[i].completed = true;
    }
  } 
  this.displayTodos();
 }  
};