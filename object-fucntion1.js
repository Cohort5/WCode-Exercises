//objects and functions relationships
var gordon = {
    name: "Gordon",
    sayName: function () {
        console.log(this);
    }
}
gordon.sayName()
//object
var gordon = {
    name: "Gordon",
    sayName: function () { //method is property that's equal to a function
        console.log(this.name);
    }
}
gordon.sayName()
//Gordon
//It should store the todo array on an object
//should have a displayTodos method
//should have a addTodos method
//should have a changeTodos method
//should have a deleteTodos method

