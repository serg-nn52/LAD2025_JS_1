// // let xhr = new XMLHttpRequest();
// // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// // xhr.send();

// // const firstElement = document.getElementById("first");
// const firstElement = document.querySelector("li");

// const title = document.querySelector("h1");

const elements = [...document.querySelectorAll("li")];
// firstElement.style.color = "red";

// document.body.innerHTML += "<h2>Новый заголовок!</h2>";

// const list = document.querySelector("ul");
// // console.log(list.innerHTML);
// // list.innerHTML = '<a href="https://yandex.by">Yandex</a>';

// console.log(firstElement.innerHTML);
// firstElement.innerHTML = '<div class="success">Вход выполнен</div>';

// const form = document.querySelector("form");
// console.log(form.innerHTML);
// // '<label>Логин</label><input type="text" id="login" /><div class="error">Введите логин</div>'

// // Меняем содержимое новым html
// form.innerHTML = '<div class="success">Вход выполнен</div>';
document.body.innerHTML += "<h2>Новый заголовок!</h2>";

const firstElement = document.querySelector("#firstElement");
// const secondElement = document.querySelector("#secondElement");

// firstElement.style.color = "red";
// console.log(elements);
// firstElement.innerHTML = '<a href="https://yandex.by">Yandex</a>';
// secondElement.innerHTML = '<a href="https://yandex.by">Yandex1</a>';

// console.log(firstElement.textContent);

const title = document.querySelector("h1");
// console.log(title.className);
title.classList.add("new_title");
console.log(title.classList.contains("title1212"));

const list = document.querySelector("ul");

const newItem = document.createElement("li");
newItem.innerText = "New element";

const lastItem = document.createElement("li");
lastItem.innerText = "Last element";

list.prepend(newItem);
list.append(lastItem);

const testItem = document.createElement("li");
testItem.innerText = "Test element";
firstElement.after(testItem);

// firstElement.onclick = () => {
//     console.log("click");
// };

let clickCounter = 0;

const handler = (event) => {
    clickCounter++;
    console.log("click-li");
    event.stopPropagation();
    firstElement.classList.toggle("red");
    if (clickCounter >= 5) {
        firstElement.removeEventListener("click", handler);
    }
};

firstElement.addEventListener("click", handler);

firstElement.addEventListener("dblclick", (event) => {
    console.log(event.target.textContent);
});

const input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log("input");
});

list.addEventListener("click", (event) => {
    // console.log(event.target.textContent);
    console.log("click-ul");
});

const link = document.querySelector("#link");
link.addEventListener("click", (event) => {
    event.preventDefault();
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

document.cookie = "user=Sergey";
document.cookie = "age=30";

console.log(document.cookie);

const name = "Sergey";

localStorage.setItem("name", name);
localStorage.setItem("age", 30);

const user = {
    name: "Ivan",
    age: 20,
};

localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));
