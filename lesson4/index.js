// function sayHi() {
//     console.log("Hi!");
// }

// sayHi();
// sayHi();
// sayHi();
// sayHi();

// function sayHi(name = "Anonim") {
//     console.log(`Hi, ${name}!`);
// }

// // sayHi("Sergey");
// // sayHi("Vasya");

// sayHi("Ivan");

// function sum(a, b) {
//     console.log("Buy!");
//     return a + b;
// }

// const result = sum(2, 3);
// console.log(result);
// console.log(sum(2, 3));
// console.log(sayHi());

// function getRandomNumber() {
//     return (
//         Math.random()
//     );
// }

// console.log(getRandomNumber());
// let text = "initial";
// function sayHi() {
//     let text = "Hi!";
//     console.log(text);
// }
// sayHi();

// sayHi();

// let name = "Ivan";
// function sayHi(text = "Hi") {
//     let name = "Sergey";
//     console.log(`${text} ${name}`);
// }
// sayHi(); // Hi Ivan

// let name = "Ivan";
// function sayHi(text = "Hi") {
//     let name = "Petr";
//     console.log(`${text} ${name}`);
// }
// sayHi(); // Hi Petr
// console.log(name);

// function toPow(a, power = 1) {
//     // let result = 1;
//     // for (let i = 0; i < power; i++) {
//     //     result *= a;
//     // }
//     return a ** power;
// }
// const result = toPow(2);
// console.log(result);

// const nums = [1, 3];

// function getAverage(arr) {
//     if (!arr.length) return "Пустой массив";
//     const quantity = arr.length;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / quantity;
// }
// console.log(getAverage(nums));

// let showText = function (text) {
//     console.log(text);
// };

// // let func = showText; // нет вызова, только присвоили значение

// // func("Text"); // вызов копии функции, хранящейся в переменной
// // showText();

// const showTextAndHi = function (fn) {
//     fn("Test text");
//     console.log("Hi!");
// };

// showTextAndHi(showText);

// sayHi();

// function sayHi() {
//     console.log("Hi!");
// }

// const sum = (a, b) => a + b;
// const sumFull = (a, b) => {
//     return a + b;
// };
// console.log(sumFull(2, 3));

// const repeatString = (str, n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// };
// repeatString("test", 3);

const checkIsVowel = (letter) => {
    if (
        letter === "а" ||
        letter === "е" ||
        letter === "ё" ||
        letter === "и" ||
        letter === "о" ||
        letter === "у" ||
        letter === "ы" ||
        letter === "э" ||
        letter === "ю" ||
        letter === "я"
    ) {
        return true;
    }
    return false;
};

console.log(checkIsVowel("в"));
