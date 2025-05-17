// console.log("ok");

// const promise = new Promise((res, rej) => {
//     res("Ok!");
// });

// const promise1 = new Promise((res, rej) => {
//     rej("Ok");
// });

// console.log(promise);

// promise
//     .then((result) => {
//         console.log(result);
//         return new Promise((res, rej) => {
//             // rej("Other Error!");
//             res("New result");
//         });
//     })
//     .then((result) => console.log(result))
//     .catch((err) => {
//         alert("Возникла ошибка!");
//         console.error(err);
//     })
//     .finally(() => {
//         console.log("finally");
//     });

// Promise.allSettled([promise, promise1]).then((res) => console.log(res));

// const delay = (ms = 500) => {
//     return new Promise((res, rej) => {
//         setTimeout(res, ms);
//     });
// };

// const sayHi = async () => {
//     console.log("Hi!");
//     await delay(2000);
//     console.log("Buy!");
// };

// sayHi();

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// console.log("Other script");

// console.log("Script start");
// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);
// new Promise((resolve, reject) => {
//     resolve("Promise resolved");
// })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// console.log("Script End");

// try {
//     console.log("try");
//     throw new Error("Our Error");
// } catch (err) {
//     console.error(err);
// } finally {
//     console.log("finally");
// }

// console.log(err);

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();

// const response = fetch("https://jsonplaceholder.typicode.com/posts");

// response
//     .then((res) => {
//         if (!res.ok) throw new Error(res.status);
//         return res.json();
//     })
//     .then((posts) => console.log(posts))
//     .catch((err) => console.error(err));

// let isLoading = false;

// const list = document.querySelector(".list");

// const createCustomElement = (text) => {
//     const element = document.createElement("li");
//     element.innerHTML = `<h3>${text}<h3>`;
//     list.append(element);
//     return element;
// };

// const fetchPosts = async () => {
//     isLoading = true;
//     const loader = createCustomElement("Loading...");
//     // const loader = document.createElement("li");
//     // loader.innerHTML = "<h3>Loading...<h3>";
//     // list.append(loader);
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts",
//         );
//         if (!response.ok) throw new Error(response.status);
//         const posts = await response.json();
//         posts.forEach((post) => {
//             // const postElement = document.createElement("li");
//             // postElement.innerHTML = `<h3>${post.title}<h3>`;
//             // list.append(postElement);
//             createCustomElement(post.title);
//         });
//     } catch (err) {
//         console.error(err);
//     } finally {
//         isLoading = false;
//         list.removeChild(loader);
//     }
// };

// fetchPosts();

// const post = {
//     id: 101,
//     title: "new post",
// };

// const sendPost = async (post) => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify(post),
//     });
// };

// sendPost(post);

// const map = new Map([
//     ["404", "Not found"],
//     ["401", "Not auth"],
// ]);

// map.set("403", "Error refresh");
// console.log(map.entries());

const arr = [1, 2, 3, 1, 10, 22, 3, 3];

const set = new Set(arr);
console.log(set.values());
console.log(set.keys());
console.log(set.entries());
