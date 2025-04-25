// Obtendo referência para o HTML 
const form = document.getElementById('task-form');
const input = document.getElementById('description');
const taskList = document.getElementById('task-list');

// Declarando variável 
let editingTask = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  if (editingTask) {
    editingTask.querySelector('span').textContent = text;
    editingTask = null;
  } else {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      span.classList.toggle('done', checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = text;

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', () => {
      input.value = span.textContent;
      editingTask = li;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  input.value = '';
});
