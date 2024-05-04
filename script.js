function addtask(){
  const taskInput = document.getElementById("taskInput")
  const taskList = document.getElementById("taskList")
  const taskText = taskInput.value;
  if(taskText.trim() !==""){
    var list = document.createElement("list")
    list.textContent = taskText
    taskList.appendChild(list)
    taskInput.value = ""
  }
  else{
    alert("Please Enter a task!")
  }
}

