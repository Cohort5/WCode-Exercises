JavaScript data types

Objects(can be as complicated as you want)
    {} todoList, arrays, functions / can have many methods
Primitive building / blocks very limited data types
String      "Look at this string!"
Number      1,2,3,4,5
Boolean     true, false 
Undefined   value that hasn't been set 
Null        "nothing"

Comarison with Primitives (values)
Sting       people === people
Number      1 === 1
Boolean     true === true
Undefined   Undefined === Undefined
Null        Null === Null

Comarison wiht Objects (saving references or memory address)
{} === {}  is false
[1,2,3] === [1,2,3]  is false
objects 1, 2, 3 looking at the address of each objects / like houses
var houseA = {}; undefined
houseA === houseA / true comparing the same object

How are primitives and objects stored inside of variables?
Next five examples: 

var myPrimitive = 10; stores values
var myObject = {name: "Brandon"}; stores memory address

var myHouse = {color: "blue"}; stores memory address
myHouse.color = "red"; access stored property "blue" and changes to "red"

var myHouse = {color: "blue"}; stores memory address
var color = myHouse.color; stores color var from property in object which is "blue"
color = "red"; changes color property 

var myHouse1 = {color: "blue"}; stores memory address
var myHouse2 = myHouse1; stores color var from property in object which is "blue"
myHouse2.color = "red"; changes color property in both variables

myHouse2.color = "red"; changes color property in both variables
myHouse1 = memory address1 {color: "red"}
myHouse2 = memory address1

var myHouse1 = {color: "blue"}; stores memory address
var myHouse2 = {color: "blue"}; stores color var from property in object which is "blue"
myHouse2.color = "red"

myHouse2.color = "red"
myHouse1 = memory address1 {color: "blue"} stays "blue"
myHouse2 = memory address2 {color: "blue"} changes to "red"

Main Point: The REAL pitfall is no trying to do it at all and just guess to figure out what is happening.
            Instead to think like a computer, for each example, draw out the diagrams, so it becomes straight forward, 
            and methodically, to help follow the process of each little step.