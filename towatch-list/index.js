function newTodo() {
    let newTodo = document.getElementById("new-todo").value;
    
    let newList = document.createElement("LI");
    newList.innerText = newTodo;
    newList.className = "latest-todo";
    document.getElementById("todo-list").appendChild(newList);


    document.getElementById("new-todo").value = "";
}

function popTodo() {
    let todo = document.getElementById("todo-list");
    todo.removeChild(todo.childNodes[0])
}