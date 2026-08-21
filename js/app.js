const STORAGE_KEY = "studentTaskTrackerTasks";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const clearTasksButton = document.getElementById("clearTasks");

function getTasks() {
  const tasksJson = localStorage.getItem(STORAGE_KEY);
  return tasksJson ? JSON.parse(tasksJson) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const tasks = getTasks();
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks saved yet.</p>";
    return;
  }

  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    taskCard.innerHTML = `
      <h3>${index + 1}. ${task.topic}</h3>
      <p><strong>Student:</strong> ${task.studentName}</p>
      <p><strong>Task:</strong> ${task.task}</p>
      <p><span class="status">${task.status}</span></p>
      <p><small>Saved at: ${task.savedAt}</small></p>
    `;

    taskList.appendChild(taskCard);
  });
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = {
    studentName: document.getElementById("studentName").value.trim(),
    topic: document.getElementById("topic").value,
    task: document.getElementById("task").value.trim(),
    status: document.getElementById("status").value,
    savedAt: new Date().toLocaleString()
  };

  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  taskForm.reset();
  renderTasks();
});

clearTasksButton.addEventListener("click", function () {
  const confirmed = confirm("Are you sure you want to clear all tasks from this browser?");
  if (confirmed) {
    localStorage.removeItem(STORAGE_KEY);
    renderTasks();
  }
});

renderTasks();
