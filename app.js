const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();

  // if The input was empty stop and return
    if (taskText === "") return;

    const li = document.createElement("li");

   
    const span = document.createElement("span");
    span.textContent = taskText;

 // Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";


    removeBtn.addEventListener("click", () => {
        li.remove();
    });

   
    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

// adding Task when pressing the Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
