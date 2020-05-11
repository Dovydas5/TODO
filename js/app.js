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

const removeActions = document.querySelectorAll('.remove')


for ( let i=0; i<removeActions.length; i++){
  const removeElement = removeActions[i]

  removeElement.addEventListener('click', removeTodo())
}

function removeTodo(){
  console.log('ggw')
}
