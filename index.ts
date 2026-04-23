let password: string = "4585999";

function valid(a:string):boolean {
    return (a.length>6);
}
console.log(valid(password));

let btn = document.querySelector("#button") as HTMLButtonElement;
let window1 = document.querySelector("#window") as HTMLElement;

function Button1() {
    window1.classList.toggle("window");
}

btn.addEventListener("click", Button1);
