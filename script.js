let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add-todo");
let todoUlElem = $.querySelector(".todoCard");
let deleteitem = $.querySelectorAll(".delete");

function addNewTodo(newTodoValue) {
  let newTodoLi = $.createElement("div");
  newTodoLi.className = "todo";

  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodoValue;

  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";

  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
}
addTodoForm.addEventListener("click", function () {
  let newTodoValue = inputElem.value.trim();
  if (newTodoValue) {
    inputElem.value = "";
    addNewTodo(newTodoValue);
  }
});
deleteitem.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});
////////////////////////////////////////////////
//clone object with recursion
const obj = {
  name: "test",
  age: 25,
  etc: {
    uk: "test",
    countries: [
      "test",
      "test",
      "test",
      {
        key: "alaki",
      },
    ],
  },
};
let newobj = {};
function cloneoj(obj) {
  if (Object.keys(obj).length === 0) {
    return;
  } else {
    let lastKey = Object.keys(obj).at(-1);
    let lastValue = Object.values(obj).at(-1);
    newobj[lastKey] = lastValue;
    delete obj[Object.keys(obj).at(-1)];
    cloneoj(obj);
  }
  return newobj;
}
console.log(cloneoj(obj));
// console.log(newobj);
