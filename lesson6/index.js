// const str = "Test example test test";

//Способ 1
// const regexp = new RegExp("test", "gi");

//Способ2
// const regexp = /test1/gi;

// const modifyStr = str.replace(regexp, "1");

// console.log(modifyStr);

// console.log(str.match(regexp));

// console.log(regexp.test(str));

// const arr = [
//     "apple",
//     1,
//     true,
//     null,
//     undefined,
//     { name: "Sergey" },
//     function () {
//         console.log("привет");
//     },
// ];

// console.log(arr[5].name);

// console.log(Array.isArray(arr));

// const arr = new Array(7);
// console.log(arr.length);
// arr[0] = "banana";
// console.log(arr.length);
// arr[6]();

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// console.log(arr.toString());

const numsList = [1, 2, 3];

//push
// numsList.push(10, 20);
// console.log(numsList.push(10));
// console.log(numsList);

//unshift

// console.log(numsList.unshift(10));
// console.log(numsList);

//pop

// console.log(numsList.pop());
// console.log(numsList);

//shift

// console.log(numsList.shift());
// console.log(numsList);

// console.log(numsList.indexOf(2, 1));
// console.log(numsList.includes(20));

// let arr = [
//     { id: 1, name: "Sergey" },
//     { id: 2, name: "Ivan" },
// ];
// let findElem = arr.find((el) => el.id === 1);
// console.log(findElem); // 3

//filter
// const arr = [2, 1, 3, 5];
// const filteredArr = arr.filter((el, i, arr) => el === arr.length);
// console.log(filteredArr);

//map
// let arr = [1, 2, 3, 4];
// const newArr = arr.map((el, i) => el * i);

// console.log(newArr);

//forEach
// let arr = [1, 2, 3, 4];
// arr.forEach((e, i, arr) => console.log(e, i, arr));

//reduce

// let arr = [1, 3];
// let result = arr.reduce((accum, current) => accum * current, 1);
// console.log(result);

// function sumEvenPositive(arr) {
//     return arr.reduce((sum, num) => {
//         if (num > 0 && num % 2 === 0) {
//             return sum + num;
//         }
//         return sum;
//     }, 0);
// }

// console.log(sumEvenPositive(arr));

// let arr = [1, 3, 2, 25, 4, 1, 2, 100];
// function delDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(delDuplicates(arr));

// const arr1 = [1, 2];
// const arr2 = [1, 2, 6];

// function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }

//     return true;
// }

// console.log(compareArrays(arr1, arr2));

// const user = {
//     name: "Sergey",
//     address: {
//         city: "NN",
//         country: "Russia",
//     },
// };

// const car = {
//     model: "BMW",
// };

//1
// const obj2 = Object.assign({}, user, car);

//2
// const obj2 = { ...user, ...car };

//3
// const objStringify = JSON.stringify({ ...user, ...car });
// const copiedObj = JSON.parse(objStringify);

//4 cloneDeep lodash

// console.log(copiedObj);

// const arr1 = [1, 2];
// const arr2 = [...arr1, 100];
// console.log(arr2);

// function foo(a, b, ...args) {
//     console.log(args);
//     return a + b;
// }

// console.log(foo(1, 2, 3, 4, 5));

// const arr = [1, 2, 3, 4, 5];

// for (let el of arr) {
//     console.log(el * 10);
// }

// let obj = { a: 1, b: 2 };

// for (let key in obj) {
//     console.log(obj[key]);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.fromEntries(Object.entries(obj)));

// function sum(...args) {
//     let result = 0;
//     for (let el of args) {
//         if (el % 2 === 0) {
//             result += el;
//         }
//     }
//     return result;
// }

// console.log(sum(1, 2, 6, 3));

// const arr1 = [1, 2, 5, 6, 9];
// const arr2 = [100, 1, 99, 5, 67];

// function findSameElements(arr1, arr2) {
//     return arr1.filter((item) => arr2.includes(item));
// }

// console.log(findSameElements(arr1, arr2));
