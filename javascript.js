// let is to create a variable
let message = "Hello";

//alert(message);

let hello = "Hello world!";

let world;

//copies "Hello world!" from hello into world
world = hello;

//now both variables hold the same data.
//alert(hello);
//alert(world);

//variable can only be declared once with let,
//after should just be referred to by variable name 

//to declare a constant us const instead of let
const MY_BIRTHDAY= "07.10.2001";

let admin;
let name = "John";
admin = name;
//alert(admin);

let ourPlanet = "Earth";

let currentVisitorName = name;

//operators: +, -, *, ** (exponent), /, % (modulus, remainder), ++, --

let x = 100 + 50;

let a = 100;
let b = 51;
let x2 = a + b;

let x3 = (a + 50) * a;

//numbers in arithmetic are called operands (including variables)
//operation to be performed are operators (like +, -)
//javascript numbers are always 64-bit floating point
//accurate up to 15 digits

//const twoDecimalPlaces = lotsOfDecimal.toFixed(2); will return a number to 2 decimal places

//JavaScript is dynamically typed, so the variables are not bound to data types

//Number
let number = 123;
number = 12.345;

//bigInt is for numbers larger than 2^53-1
const bigInt = 1234567890123456789012345678901234567890;

//String
let str = "Hello";
let str2 = 'Single quotes are okay too.';
let str3 = `${str}! backticks allow you to embed another variable or operation!`;

//Boolean t/f
let nameFieldChecked = true;
let ageFieldChecked = false;

//Null is a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

//Undefined is “value is not assigned”.

let eyeColor;
//alert(age); would show "undefined"

//Object is used to store collections of data and more complex entities.

//Symbol is used to create unique identifiers for objects.

//typeof operator returns the type of the operand

typeof 0; // number
typeof 10n; // bigint
typeof true; //boolean
typeof "foo"; //string
typeof Symbol("id"); // symbol

//switch(x) {
//  case 'value1':  // if (x === 'value1')
//    ...
//    [break]
//
//  case 'value2':  // if (x === 'value2')
//    ...
//    [break]
//
//  default:
//    ...
//    [break]

