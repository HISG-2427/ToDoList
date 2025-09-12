const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const refresh = document.querySelector(".refresh");

const morebtn = document.createElement("button");
morebtn.classList.add('bxr  bx-dots-vertical-rounded');

function addTask(){
    if (!input.value) {
        alert("Please Write Something"); 
    }
    else {
        const li = document.createElement("LI");
        li.innerHTML = input.value + morebtn;
        ul.append(li); 
        input.value = "";
        refresh.style.opacity = "1";
    } 
};
function refreshTask() {
    ul.innerHTML = "";
    refresh.style.opacity = "0";
};