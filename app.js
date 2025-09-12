const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const refresh = document.querySelector(".refresh");

function addTask(){
    const li = document.createElement("LI");
    li.classList.add = "fadeUp";
    if (!input.value) {
        alert("Please Write Something")
    }
    else {
        li.innerHTML = input.value;
        ul.append(li); 
        input.value = "";
        refresh.style.opacity = "1";
    } 
};
function refreshTask() {
    ul.innerHTML = "";
    refresh.style.opacity = "0";
}