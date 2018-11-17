for (var i = 0; i < 3; i++) {
    console.log("Hey");
}
//i = i + 1 is so common we use i++
//i++ short cut
for (initialization; condition; final-expression) {
    console.log("Hey");
}

for (var i = 6; i < 10; i = i +2) {
    console.log(i);
}
6
8

var testArray = ["Item 1", "Item 2", "Item 3"];
for (var i = 0; i < testArray.length; i++) {  //better than i < 3, which is hard coded
    console.log(testArray[i]);
}
testArray.push("extra item");

//displayTodos should show .todoText
//displayTodos should tell you if .todo is empty
//displayTodos should show .completed
