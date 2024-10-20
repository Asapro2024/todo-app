document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskCount = document.getElementById('task-count');

    let tasks = [];
  
    addTaskButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const task = { text: taskText, completed: false };
      tasks.push(task);
      taskInput.value = '';
      renderTasks();
    }
  
  
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  
    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
  
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        if (task.completed) {
          taskText.style.textDecoration = 'line-through';
        }
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));
  
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'DEL';
        deleteButton.addEventListener('click', () => deleteTask(index));
  
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
  
        taskList.appendChild(taskItem);
      });
  
      updateTaskCount();
    }
     
    function updateTaskCount() {
      const remaining = tasks.filter(task => !task.completed).length;
      taskCount.textContent = "1 of 1 remaining";
    }
  
  });