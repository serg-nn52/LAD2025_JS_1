// function createTimer() {
//     let initialValue;
//     return function tick(start, end) {
//         initialValue = start;
//         console.log(initialValue);
//         if (initialValue === end) {
//             console.log("Таймер завершил работу");
//         } else {
//             initialValue--;
//             setTimeout(() => tick(initialValue, end), 1000);
//         }
//     };
// }

// let timer = createTimer();
// timer(7, 0);

// const animal = {
//     isLive: true,
//     hasHead: true,
// };

// const dog = {
//     name: "Sharik",
//     isTail: true,
// };

// dog.__proto__ = animal;
// console.log(dog.isLive);

// let animal = {
//     jumps: "Прыжок!",
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: "Заяц прыгнул!",
// };
//console.log(rabbit.jumps);

// delete rabbit.jumps;

//console.log(rabbit.jumps); // ? (2)
// delete animal.jumps;

// console.log(rabbit.jumps);

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// this.sayHi = function () {
//     console.log("Меня зовут: " + this.name);
// };
// }

// CreateUser.prototype.sayHi = function () {
//     console.log("Меня зовут: " + this.name);
// };

// let firstUser = new CreateUser("Ivan", 21); // {name: “Ivan”, age: 21}
// let secondUser = new CreateUser("Alex", 18); // {name: “Alex”, age: 18}

// console.log(secondUser);
// firstUser.sayHi();
// console.log(CreateUser.prototype === firstUser.__proto__);

// function CreatePostcard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         console.log(this.from, this.to);
//     };
// }
// // CreatePostcard.prototype.show = function () {
// //     confirm.console.log(this.from, this.to);
// // };

// CreatePostcard.prototype.changeFrom = function (newFrom) {
//     this.from = newFrom;
// };

// const postCard = new CreatePostcard("Minsk", "NN");
// postCard.changeFrom("Moskow");
// // console.log(postCard);
// postCard.show();

// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log("Меня зовут: " + this.name);
//     }
// }

// class Test {}

// const parent1 = new Parent("Ivan");
// parent1.sayHi();

// console.log(parent1 instanceof Parent);

// console.log(parent1);

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.isLive = true;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }

// const animal = new Animal("Pumba");

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         this.isTail = true;
//     }
//     sayHi() {
//         console.log("Gav");
//     }
// }

// const dog = new Dog("Sharik");

// console.log(dog);
// dog.sayHi();
// dog.sayName();
// console.log(animal.sayName());

// class User {
//     //this._name
//     get name() {
//         console.log("Попытка получения данных!");
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 5) {
//             console.log("Короткое имя!");
//             return;
//         }
//         this._name = value;
//     }
// }
// const user = new User();

// user.name = "Sergey";

// console.log(user.name);

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname);
        this.rate = rate;
        this.day = day;
    }

    getSalary() {
        return this.rate * this.day;
    }
}

// const human = new People("Ivan", "Ivanov");
// console.log(human);
// console.log(human.getFullName());

const manager = new Worker("Ivan", "Ivanov", 3000, 22);
const boss = new Worker("Petr", "Petrov", 10000, 22);

console.log(manager, manager.getSalary());
console.log(boss, boss.getSalary());
