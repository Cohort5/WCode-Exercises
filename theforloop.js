//The for loop
i = 0                   //Initialization, creates a variable
Say "Hey" if i < 3      //Condition, if this do that
Increase i by 1         //final-expression, after each round, iteration

0 "Hey"
1 "Hey"
2 "Hey"
3

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
