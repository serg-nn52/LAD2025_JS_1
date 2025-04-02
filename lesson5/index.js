// const checkIsNegative = (num) => (num < 0 ? true : false);

// console.log(typeof checkIsNegative(-1), checkIsNegative(-1));

let user = {
    name: "Sergey",
    age: 18,
};

// const manager = Object.create(user);

// manager.role = "manager";

// console.log(manager.name);

user = {
    name: "Ivan",
    age: 30,
    "user-role": "manager",
};

// const roleName = "user-role";

// console.log(user.name);
// console.log(user[roleName]);

// user.car = "BMW";
// user["animal"] = "dog";

// console.log(user);

// user.age = 31;
// console.log(user);

// delete user["user-role"];
// console.log(user);

// let newUser = {
//     sayName: function () {
//         console.log("Ivan");
//     },
// };

// let newUser = {
//     sayName() {
//         console.log("Ivan");
//     },
// };

// let newUser = {
//     name: "Sergey",
//     sayName: () => {
//         console.log(this.name); //undefined
//     },
// };

// newUser.sayName();

// const myFavoriteFilm = {
//     nameMovie: "Blade Runner 2049",
//     dateRelease: 2017,
//     director: "Дени Вильнёв",
//     country: "США",
// };

// myFavoriteFilm.revenue = 276599957;
// myFavoriteFilm.getNameMovie = function () {
//     console.log(this.nameMovie);
// };

// delete myFavoriteFilm.dateRelease;

// myFavoriteFilm.getNameMovie();
//const str = "Hello Ivan";

// console.log(str.toUpperCase());

// let number = 1.2345;
// console.log(typeof +number.toFixed(2));

// console.log(0xff === 255);

// console.log(parseInt("200.5px"));
// console.log(parseFloat("200.5px"));

// const exampleNaN = NaN;

// console.log(isNaN(exampleNaN));

// const exampleInfinity = 10 / 0;
// console.log(isFinite(10000));

// let num = 255;
// console.log(num.toString(16));

// let num = 12.01;
// console.log(Math.ceil(num));

// console.log(Math.min(2, 5, 100, 10, 56, 8));

// const str = "test \n\tnew \\ string";

// // str[1] = "r";
// console.log(str[1]);

// console.log("Ivan"[0].toLowerCase());
// console.log("z" > "Z");
// console.log("z".codePointAt(0)); // 122
// console.log("Z".codePointAt(0));
// let str = "Widget with id";
// console.log(str.indexOf("id23"));

// console.log(str.includes("id23"));
// console.log(str.slice(1, 3));
// console.log(str.slice(3));
// console.log(str.slice(3, -1));
// console.log(str.substr(1, 2));
// console.log(str.substring(1, 3));

// const str = "test123, $,!test";
// console.log(str.replace(/[^a-zA-Z0-9]/gi, ""));

// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNum(1, 100));

// function checkUpperCase(str, n) {
//     if (n < 0 || n >= str.length) return false;
//     return str[n] === str[n].toUpperCase();
// }

// console.log(checkUpperCase("tEst", 1));

//Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

// const replaceAll = (str, substr, replaceValue) => {
//     return str.replaceAll(substr, replaceValue);
// };

// const replaceAll = (str, substr, replaceValue) => {
//     let tempStr = str;
//     while (tempStr.includes(substr)) {
//         tempStr = tempStr.replace(substr, replaceValue);
//     }
//     return tempStr;
// };

// console.log(replaceAll("test test test", "es", "$"));

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3
