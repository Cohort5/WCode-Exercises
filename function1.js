var myName = "Gordon";

function sayName() {
    console.log(myName);
}
sayName(); //"Gordon"

function sayName() {
    var secret = "WatchAndCode";
    console.log(myName);
}
sayName(); //"Gordon"
console.log(secret);
// If your inside of a function, you can look out and see data, but the opposite isn't true. If you're outside, you can't look in.
//variable visibility is called scope