//console.log(window);
// sigle element
//const form = document.getElementById("todo-form");

//const form = document.querySelector("#todo-form");
//console.log(form);

//multiful element
/*
const items = document.querySelectorAll(".item"); 대부분 이거 사용
items.forEach((item) => {
  console.log(item);
});
*/
//console.log(document.getElementsByClassName("item"));
//console.log(document.getElementsByTagName("li"));

//const todos = document.querySelector("#todo-list");
//console.log(todos);
//todos.lastElementChild.remove();
//todos.firstElementChild.textContent = "Hello";
//todos.lastElementChild.innerHTML = "<h1>Hello</h1>";

const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");

button.addEventListener("click", onSubmit);
//addEventListener에는 (어떤이벤트, 어떤 기능) 이렇게 들어감

function onSubmit(e) {
  e.preventDefault(); //버튼 클릭 후 새로고침 되지 않음

  if (todoInput.value === "") {
    // 입력된게 없을 경우
    msg.style.display = "block"; // 안내메시지 생성
    setTimeout(() => (msg.style.display = "none"), 2000); // 2초동안
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add("item");
  todos.appendChild(li);
  todoInput.value = ""; // 초기화 시켜줌
}
