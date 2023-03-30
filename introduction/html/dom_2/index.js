const myTodoListTag = document.getElementById("todo-list-item");
const mySaveBtn = document.querySelector("button");
const myNewTodoInput = document.querySelector("input");

// function fillListTag() {
//   myTodoListTag.innerHTML = "";
//   for (let i = 0; i < myTodoList.length; i++) {
//     let newListItemTag = document.createElement("li");
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     newListItemTag.textContent = myTodoList[i];

//     newListItemTag.appendChild(deleteBtn);
//     myTodoListTag.appendChild(newListItemTag);
//   }
// }

function onSaveBtnClick() {
  if (myNewTodoInput.value.trim() === "") return;
  let newListItemTag = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  newListItemTag.textContent = myNewTodoInput.value;
  newListItemTag.appendChild(deleteBtn);
  myTodoListTag.appendChild(newListItemTag);
  myNewTodoInput.value = "";
  deleteBtn.addEventListener("click", deleteListItem);
  // myTodoList.push(myNewTodoInput.value);
  // fillListTag();
}

function deleteListItem(e) {
  e.target.parentElement.remove();
}

mySaveBtn.onclick = onSaveBtnClick;

// fillListTag();

// const btn = document.querySelector("#test");

// function onMyBtnClicked(e) {
//   e.target.textContent = "deyisdi";
// }

// btn.addEventListener("click", onMyBtnClicked);
