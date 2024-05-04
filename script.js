function addTodo() {
  var input = document.getElementById("todo-input").value;
  if (input === '') {
      alert("Please enter a task");
      return;
  }
  var ul = document.getElementById("todo-list");
  var li = document.createElement("li");
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    li.remove();
  });
  li.appendChild(document.createTextNode(input));
  li.appendChild(removeButton);
  ul.appendChild(li);
  document.getElementById("todo-input").value = "";

  li.addEventListener("click", function() {
    this.classList.toggle("completed");
  });
}