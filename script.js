document.getElementById('add-task-button').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskItemContent = document.createElement('div');
    taskItemContent.className = 'task-item-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = taskText;

    taskItemContent.appendChild(checkbox);
    taskItemContent.appendChild(taskTextNode);

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit Task', taskTextNode.textContent);
        if (newTaskText !== null) {
            taskTextNode.textContent = newTaskText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    taskItem.appendChild(taskItemContent);
    taskItem.appendChild(actions);

    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
});
