document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const pendingTasks = document.getElementById('pending-tasks');
    const inProgressTasks = document.getElementById('in-progress-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    let currentEditingTask = null;

    function fetchTasks() {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(tasks => {
                pendingTasks.innerHTML = '';
                inProgressTasks.innerHTML = '';
                completedTasks.innerHTML = '';
                tasks.forEach(task => {
                    const taskElement = createTaskElement(task);
                    if (task.status === 'Pendiente') {
                        pendingTasks.appendChild(taskElement);
                    } else if (task.status === 'En Progreso') {
                        inProgressTasks.appendChild(taskElement);
                    } else {
                        completedTasks.appendChild(taskElement);
                    }
                });
            });
    }

    function createTaskElement(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task priority-${task.priority}`; // Asigna la clase según la prioridad
        taskDiv.innerHTML = `
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <p>Prioridad: ${task.priority}</p>
        <button class="edit-button" onclick="editTask(${task.id})">Editar</button>
    `;
        return taskDiv;
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const status = document.getElementById('task-status').value;
        const priority = document.getElementById('task-priority').value;

        const taskData = {
            title,
            description,
            status,
            priority: parseInt(priority)
        };

        if (currentEditingTask) {
            fetch(`/api/tasks/${currentEditingTask.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            }).then(() => {
                currentEditingTask = null;
                fetchTasks();
                taskForm.reset();
            });
        } else {
            fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            }).then(() => {
                fetchTasks();
                taskForm.reset();
            });
        }
    });

    window.editTask = function(taskId) {
        fetch(`/api/tasks/${taskId}`)
            .then(response => response.json())
            .then(task => {
                document.getElementById('task-title').value = task.title;
                document.getElementById('task-description').value = task.description;
                document.getElementById('task-status').value = task.status;
                document.getElementById('task-priority').value = task.priority;
                currentEditingTask = task;
            });
    };

    document.getElementById('download-btn').addEventListener('click', function() {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(tasks => {
                const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'tasks.json';
                a.click();
                URL.revokeObjectURL(url);
            });
    });

    document.getElementById('upload-btn').addEventListener('click', function() {
        const fileInput = document.getElementById('upload-file');
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const tasks = JSON.parse(event.target.result);
                tasks.forEach(task => {
                    fetch('/api/tasks', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(task)
                    });
                });
                fetchTasks();
            };
            reader.readAsText(file);
        }
    });

    fetchTasks();
});