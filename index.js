//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
let password = "4585999";
function valid(a) {
    return (a.length > 6);
}
console.log(valid(password));
let btn = document.querySelector("#button");
let window1 = document.querySelector("#window");
function Button1() {
    window1.classList.toggle("window");
}
btn.addEventListener("click", Button1);
//# sourceMappingURL=index.js.map