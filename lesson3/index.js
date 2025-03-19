// console.log(NaN !== NaN);
// const testVar = 24 / "abc";
// console.log(Number.isNaN(testVar));

// const userAge = 25;

// if (userAge < 18) {
//     console.log("Доступ запрещен!");
// } else if (userAge < 60) {
//     console.log("Добро пожаловать, молодежь!");
// } else {
//     console.log("Добро пожаловать!");
// }

//? - тернарный оператор

// const message = userAge < 18 ? "Доступ запрещен!" : "Добро пожаловать!";

// let message;

// if (userAge < 18) {
//     message = "Доступ запрещен!";
// } else {
//     message = "Добро пожаловать!";
// }

// console.log(message);

// const userAge = 18;

// switch (userAge) {
//     case 18:
//         console.log("Поздравляем с совершеннолетием!");
//         break;
//     case 60:
//         console.log("Поздравляем с выходом на пенсию!");
//         break;
//     default:
//         console.log("Поздравляем с ДР!");
//         break;
// }

// const line1 = 100;
// const line2 = 40;
// const line3 = 30;

// if (line1 > line2) {
//     if (line1 > line3) {
//         console.log(line1);
//     }
// }
// if (line2 > line1) {
//     if (line2 > line3) {
//         console.log(line2);
//     }
// }
// if (line3 > line1) {
//     if (line3 > line2) {
//         console.log(line3);
//     }
// }

// let a = 10;
// let b = 8;
// let c = 30;

// let max = a;

// if (b > max) {
//     max = b;
// }
// if (c > max) max = c;

// console.log("Наибольшая длина отрезка:", max);

// ниже либо равна -30:  “Оставайтесь дома!”;
// от -30 до -10 включительно: “Сегодня холодно”;
// от -10 до +5 включительно: “Не холодно”;
// от +5 до +15 включительно: “Тепло”;
// от +15 до +25 включительно: “Очень тепло”;
// от +25 до +35: “Жарко”;
// выше либо равно +35: “Пекло!”;

// const temp = 40;

// if (temp <= -30) {
//     console.log("Оставайтесь дома!");
// } else if (temp <= -10) {
//     console.log("Сегодня холодно");
// } else if (temp <= 5) {
//     console.log("Не холодно");
// } else if (temp <= 15) {
//     console.log("Тепло");
// } else if (temp <= 25) {
//     console.log("Очень тепло");
// } else if (temp < 35) {
//     console.log("Жарко");
// } else {
//     console.log("Пекло!");
// }

// const role = "noname";

// switch (role) {
//     case "admin":
//         console.log("admin");
//         break;
//     case "user":
//         console.log("user");
//         break;
//     case "manager":
//         console.log("manager");
//         break;
//     default:
//         console.log("Роль не определена!");
//         break;
// }

// console.log(Boolean("test string"));
// console.log(!!"test string");

// console.log(null || 0 || "" || undefined);
// console.log(0 || (true && "false") || null);
// console.log((0 && true) || ("false" && null));
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));

//While
// let count = 0;

// while (count < 5) {
//     console.log("Ok!");
//     count++;
// }

//Do while

// do {
//     console.log("Ok!");
// } while (false);

//for
// for (let i = 0; i < 5; i++) {
//     console.log("Ok!");
// }

// let count = 0;

// while (true) {
//     if (count === 5) break;
//     console.log("Ok!");
//     count++;
// }
// while (count < 5) {
//     count++;
//     if (count === 2) continue;
//     console.log("Ok!");
// }

// let day = 1;
// let cars = N;
// while (cars >= M) {
//     cars = cars / 2;
//     day++;
// }
// console.log(day);

const M = 5;
let N = 32; // счетчик машин

// let daysCounter = 1;

// while (N >= M) {
//     N = N / 2;
//     daysCounter++;
// }
// console.log(daysCounter);

let daysCounter = 1;
for (; N >= M; daysCounter++) {
    N = N / 2;
}
console.log(daysCounter);
