const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const refresh = document.querySelector(".refresh");
const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

const trashbtn = document.createElement("button");
trashbtn.setAttribute('class', 'bxr  bx-trash'); 

function addTask(){
    if (!input.value) {
        alert("Please Write Something"); 
    }
    else {
        const textNode = document.createTextNode(input.value);
        const btnclone = trashbtn.cloneNode(true);
        const li = document.createElement("li");

        li.appendChild(textNode);
        li.appendChild(btnclone);
        ul.appendChild(li);
        input.value = "";
        refresh.style.opacity = "1";
    } 
};
function refreshTask() {
    ul.innerHTML = "";
    refresh.style.opacity = "0";
};
trashbtn.addEventListener("click", function remove(li){
    li.parentNode.removeChild(li);
})