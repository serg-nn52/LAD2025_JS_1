class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str
            .split(" ")
            .map((word) => this.ucFirst(word))
            .join(" ");
    }
}

let myStr = new MyString();

console.log(myStr.reverse("hello"));
console.log(myStr.ucFirst("hello"));
console.log(myStr.ucWords("hello world"));
