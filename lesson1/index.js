// console.log('Hello world!');

let belarusUserName; //camelCase

let MainPage; //PascalCase
// main-page-sdf  kebab-case

let super_admin; //snake_case

//let

// let userName = 'Alexei';

// userName = 'Sergey';

// let car;

// car = 'Audi';
// car = 'BMW';

// console.log(car);

//const

// const country = 'Russia';

// // country = 'Belarus';

// console.log(country);

//var

// var isAdmin = true;
// console.log(isAdmin)

// peopleCount = 4;

// console.log(peopleCount);

//types

//number

const age = 18;
const pi = 3.14;

console.log(age / 0); //Infinity
console.log(-1 / 0); //-Infinity
console.log(1 / "Sergey"); //NaN

//string

const studentsAgeMessage = `Средний возраст студентов ${age} лет`;

console.log(studentsAgeMessage);

//boolean
let isAdmin = false;
let isOpen = true;

console.log(isAdmin);

//null

const emptyValue = null;

console.log(emptyValue);

//undefined
console.log(userName);
var userName = "Ivan";

//symbol

console.log(Symbol("Sergey"));

//bigint

console.log(123123123n);

//Object

let user = {
    name: "Alex",
    age: 25,
    "last-name%": "Ivanov",
};

const fruits = ["apple", "banana", 1, true];

console.log(user.name);
console.log(user["age"]);
console.log(user["last-name%"]);

//typeof

console.log(typeof user); //object
console.log(typeof fruits); //object
console.log(typeof 123123123n); //bigint

//Исключения
console.log(typeof console.log); //function
console.log(typeof null); //object
