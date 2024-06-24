const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Create space between task text and buttons
        let space = document.createTextNode("\u00A0\u00A0");
        li.appendChild(space);

        // Create edit button
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "\u270E"; 
        editBtn.onclick = function() {
            editTask(li);
        };
        li.appendChild(editBtn);

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "\u00D7"; 
        deleteBtn.onclick = function() {
            deleteTask(li);
        };
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function editTask(li) {
    let newText = prompt("Edit task:", li.textContent.trim());
    if (newText !== null) {
        li.textContent = newText.trim();
        saveData();
    }
}

function deleteTask(li) {
    li.remove();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
