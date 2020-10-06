document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener("submit", newTask);
});

const newTask = function(event){
  event.preventDefault();
  addTaskToList(event.target.children[1].value);
  event.target.children[1].value = "";
}

const addTaskToList = function(taskName) {
  let list = document.getElementById("tasks");
  let newTask = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", removeTask);
  newTask.id = taskName;
  newTask.innerText = taskName + " ";
  newTask.appendChild(deleteBtn);
  list.appendChild(newTask);
}

const removeTask = function(event) {
  let tasks = document.querySelectorAll(`li#${event.target.parentElement.id}`);
  tasks[0].remove();
}