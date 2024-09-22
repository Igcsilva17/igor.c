document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Botão para remover a tarefa
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);

    taskInput.value = ""; // Limpa o campo de entrada
});
