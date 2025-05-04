
const addTaskButton = document.querySelector('.add-task-btn');
const taskList = document.querySelector('#tasks');
const newTaskInput = document.querySelector('#new-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  if (newTaskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${newTaskInput.value}</span>
      <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    li.querySelector('.task-text').addEventListener('click', toggleCompletion);

    taskList.appendChild(li);
    newTaskInput.value = '';
  }
}

function deleteTask(event) {
  event.target.parentElement.remove();
}

function toggleCompletion(event) {
  event.target.parentElement.classList.toggle('completed');
}
