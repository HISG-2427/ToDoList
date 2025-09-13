const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const refresh = document.querySelector(".refresh");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";

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

        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(btnclone);
        ul.appendChild(li);

        btnclone.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

        input.value = "";
        refresh.style.opacity = "1";
    } 
};
function refreshTask() {
    ul.innerHTML = "";
    refresh.style.opacity = "0";
};