const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const themeToggle = document.getElementById("theme-toggle");
const emptyState = document.getElementById("empty-state");
const statsEl = document.getElementById("stats");
const statsRemaining = document.getElementById("stats-remaining");
const statsCompleted = document.getElementById("stats-completed");

// Apply saved theme preference on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  themeToggle.textContent = "☀️ Light";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

function updateStats() {
  const items = todoList.querySelectorAll(".todo-item");
  const total = items.length;
  const completed = todoList.querySelectorAll(".todo-item.completed").length;
  const remaining = total - completed;

  if (total === 0) {
    emptyState.classList.remove("hidden");
    statsEl.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    statsEl.classList.remove("hidden");
    statsRemaining.textContent = `${remaining} remaining`;
    statsCompleted.textContent = `${completed} done`;
  }
}

function createTodoItem(text) {
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const todoText = document.createElement("span");
  todoText.textContent = text;
  todoText.title = "Click to toggle complete";
  todoText.addEventListener("click", () => {
    listItem.classList.toggle("completed");
    updateStats();
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.classList.add("removing");
    listItem.addEventListener("animationend", () => {
      listItem.remove();
      updateStats();
    }, { once: true });
  });

  listItem.append(todoText, deleteButton);
  return listItem;
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    return;
  }

  const todoItem = createTodoItem(text);
  todoList.appendChild(todoItem);
  todoInput.value = "";
  todoInput.focus();
  updateStats();
});

// Initialise empty state on load
updateStats();
