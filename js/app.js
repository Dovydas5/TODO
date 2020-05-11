"use strict";

function renderList(list) {
  const listTodo = document.querySelector(".container");
  let HTML = "";

  for (let i = 0; i < list.length; i++) {
    const todoItem = list[i];
    HTML += `
    <div class="item">
    <div class="status ${todoItem.status}"></div>
    <p class="description">${todoItem.description}</p>
    <div class="deadline">${todoItem.deadline}</div>
    <div class="actions">
        <div class="remove actions">Remove</div>
</div>
    </div>`;
  }
  return (listTodo.innerHTML += HTML);
}

renderList(todo_list);

const removeActions = document.querySelectorAll(".item .actions.remove");

for (let i = 0; i < removeActions.length; i++) {
  const removeElement = removeActions[i];

  removeElement.addEventListener("click", removeTodo);
}

function removeTodo(event) {
  const parentItem = event.target.closest(".item");
  parentItem.remove();
}

// const removeAll = document.querySelector('.global > action.remove');

// removeAll.addEventListener('click', deleteAll);

// function deleteAll (event) {
//   const parent = event.target.closes('.container')
//   const AllTodo = parent.querySelectorAll('item')
//   for ( let i=0; i<AllTodo.length; i++){
//     AllTodo[i].remove();
//   }
// }

const form = document.querySelector("form");
const taskTextarea = form.querySelector("textarea");
const deadline = form.querySelector("input");
const formActions = form.querySelector("actions");
const formAdd = document.querySelector(".btn.add");
const formClear = document.querySelector(".btn.clear");

formClear.addEventListener("click", clearForm);
function clearForm() {
  taskTextarea.value = "";
  deadline.value = "";
}

formAdd.addEventListener("click", addNewTodoItem);
function addNewTodoItem() {
  let newTodo = {
    description: taskTextarea.value.trim(),
    created_on: "2020-05-05",
    deadline: deadline.value.trim(),
    status: "todo",
  };

  if (newTodo.description.length === 0 ) {
    return console.log("tuscia");
  }
  if (newTodo.deadline.length > 0 &&  new Date(newTodo.deadline).toString() === 'Invalid Date' ){
    return console.log("bloga reiskme");


  }
  


  console.log(newTodo);
  return;
}
