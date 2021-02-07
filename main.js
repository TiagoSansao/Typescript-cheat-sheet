"use strict";
exports.__esModule = true;
//   Types
var message = 'Opa';
var boolean = true;
var total = 5;
var doido = null;
var maluco = undefined;
var random = true;
// When it's an array just write the type of the array's values and add [] at the end or use Array<type>
var list1 = [1, 2, 3];
var list2 = [3, 2, 1];
var list3 = ['John', "Luiz"];
var lits4 = [true, false];
// When values' type may be different, put the types between 
var lists5 = ['Jose', "Marcos", false, true, "Richard"];
// That's how you define type to an array of different types and defined quantity of values.
var person1 = ['Bolsonaro', 17];
console.log(person2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var anyVariable = true;
anyVariable = 'salve';
anyVariable = 5;
// Declared variables without assignment receive "any" type
var a;
a = 20;
// Declared variables with assignment receive dynamically the assigned value's type
var x = "Hello Typescript";
// Multitype variables, use the pipe |
var multiType = 'José';
multiType = [5, 3];
multiType = "I'm a string!";
// Functions, give type to parameters and especify the return type
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function hello() {
    console.log('hi');
}
function fullName(_a) {
    var firstName = _a.firstName, _b = _a.lastName, lastName = _b === void 0 ? '' : _b;
    return firstName + " " + lastName;
}
var p = {
    firstName: 'José'
};
fullName(p);
