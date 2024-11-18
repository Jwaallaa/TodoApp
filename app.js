let ul = document.querySelector("ul");
let btn = document.querySelector("#btn");
let input = document.querySelector("input");
let form = document.querySelector("form");

let todos;

const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

const initialfetch = ()=>{
    todos = getTodos();
    ul.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.task;
        li.id = todo.id;
        ul.appendChild(li)
        let delbtn = document.createElement("button");

    delbtn.textContent = "Delete";
    li.append(delbtn);

    input.value = "";
})

}

initialfetch()

const addTodo = (newTodo) => {
  const todos = getTodos();
  
  todos.push(newTodo);
  saveTodos(todos);
  initialfetch()
};

const deleteTodo = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(updatedTodos);
  initialfetch()
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const li = e.target.parentNode;
      deleteTodo(Number(li.id)); // Ensure ID is treated as a number
      li.remove(); // Remove the list item from the DOM
    }
  });
btn.addEventListener("click", () => {
  let task = input.value.trim();
  if (task.length > 0) {
    const id = Date.now();
    const newTodo = {
        id, // Unique ID based on timestamp
        task
      };
    let li = document.createElement("li");
    li.textContent = task;
    li.id = id;
    ul.appendChild(li);
    addTodo(newTodo);

    let delbtn = document.createElement("button");

    delbtn.textContent = "Delete";
    li.append(delbtn);

    input.value = "";

  }
});
