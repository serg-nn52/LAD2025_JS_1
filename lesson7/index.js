// function sayHi(name) {
//     console.log(`Hi, ${name}`);
//     sayHi.counter = 0;
// }

// sayHi("Sergey");

// function sayHi() {
//     console.log(`Hi, ${this.name}`);
// }

// const sayHi = function () {
//     console.log(`Hi, ${this.name}`);
// };

// const sayHi = () => {
//     console.log(`Hi, ${this.name}`);
// };

// const user = {
//     name: "Sergey",
//     sayHi,
// };

// const admin = {
//     name: "Vasya",
//     sayHi,
// };

// admin.sayHi();

// function showGlobalObject() {
//     console.log(this);
// }

// showGlobalObject();

// function nameCity() {
//     console.log(this.name);
// }
// function popCity() {
//     console.log(this.population);
// }
// function newName(newNam) {
//     this.name = newNan;
// }
// const city = {
//     name: "Moskow",
//     population: 10000000,
//     getName() {
//         return this.name;
//     },
//     getPopulation() {
//         return this.population;
//     },
//     setProperty: function (property, value) {
//         if (this.hasOwnProperty(property)) {
//             this[property] = value;
//             console.log(
//                 `Значение свойства "${property}" изменено на "${value}".`,
//             );
//         } else {
//             console.log(`Свойство "${property}" не существует в объекте.`);
//         }
//     },
// };

// city.setProperty("population", 11000000);
// console.log(city);

// let user1 = {
//     name: "Вася",
// };
// let user2 = {
//     name: "Петя",
// };
// function say(phrase) {
//     console.log(`${this.name} : ${phrase} `);
// }

// say.call(user1, "Привет!");
// say.apply(user2, ["И тебе привет"]);

// const sayVasya = say.bind(user1, "Приветик!");
// const sayVasya = say.bind(user1);

// sayVasya("Hello!");

// say.call(user1, "Привет"); // Вася : Привет
// say.call(user2, "И тебе привет"); // Петя : И тебе привет

// const city1 = {
//     name: "Moskow",
//     population: 10000000,
//     getName() {
//         return this.name;
//     },
//     getPopulation() {
//         return this.population;
//     },
//     setProperty: function (property, value) {
//         if (this.hasOwnProperty(property)) {
//             this[property] = value;
//             console.log(
//                 `Значение свойства "${property}" изменено на "${value}".`,
//             );
//         } else {
//             console.log(`Свойство "${property}" не существует в объекте.`);
//         }
//     },
// };

// const city2 = {
//     name: "Санкт-Петербург",
//     population: 1625631,
// };
// console.log(city1.getName.call(city2));
// console.log(city1.getPopulation.apply(city2));

// const setCity2Property = city1.setProperty.bind(city2);
// setCity2Property("name", "Екатеринбург");
// setCity2Property("population", 1493749);

// console.log(city2);

// function example(a) {
//     let c = 1; // область видимости, которая попадает в замыкания
//     return function (b) {
//         //область видимости этой функции замкнута на ф-ю.                  example
//     };
// }

// function createCounter() {
//     let count = 0;
//     return function () {
//         console.log(count++);
//     };
// }

// const counter = createCounter();
// const counter2 = createCounter();

// counter();
// counter();
// counter();
// counter();
// counter();
// counter2();
// counter2();
// counter();

// function example() {
//     let closure = 100;
//     return function (b) {
//         console.log(closure + b);
//     };
// }
// const closureExample = example();
// closureExample(100); // 200
// closureExample(1000);

// function volumeCalculator(height) {
//     return function (length, width) {
//         return length * width * height;
//     };
// }
// const volumeFixHeight = volumeCalculator(20);

// console.log(volumeFixHeight(5, 10));

function calculateV(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(calculateV(10)(2)(3));
