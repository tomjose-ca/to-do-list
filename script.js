document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Remove extra spaces

  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.className = "list-group-item d-flex justify-content-between align-items-start mb-2";

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;
  taskLabel.className = "me-3"; 

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "d-flex justify-content-end flex-wrap gap-2";

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.className = "btn btn-success btn-sm";

  completeButton.addEventListener("click", function () {
    taskLabel.classList.toggle("completed");

    if (taskLabel.classList.contains("completed")) {
      taskInput.classList.add("input-ash");
    } else {
      taskInput.classList.remove("input-ash");
    }
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn btn-warning btn-sm";

  editButton.addEventListener("click", function () {
    const newText = prompt("Edit task:", taskLabel.textContent);
    if (newText && newText.trim() !== "") {
      taskLabel.textContent = newText.trim();
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-danger btn-sm";

  deleteButton.addEventListener("click", function () {
    taskItem.remove();
  });

  buttonContainer.appendChild(completeButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(buttonContainer);

  document.getElementById("taskList").appendChild(taskItem);

  taskInput.classList.remove("input-ash");
  taskInput.value = "";
});