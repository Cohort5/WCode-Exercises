//function todo exercises.
var todos = ["Item 1" ,"Item 2" ,"Item 3" ,"Item 4" ,"Item 5"];

//It should have a function to display todos.
function displayTodos() {
    console.log("My todos:", todos);
}
//It should have a function to add todos.
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
//It should have a function to change todos
function changeTodo(postion, newValue) {
    todos[postion] = newValue;
    displayTodos();
}
//It should have a function to delete todos
function delteTodo(postion) {
    todos.splice(postion, 1);
    displayTodos();
}    
