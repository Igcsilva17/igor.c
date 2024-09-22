/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Carrega o HTML para simular o DOM
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Teste de Lista de Tarefas', () => {
    let taskInput, addTaskBtn, taskList;

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        require('./app');  // Carrega o arquivo JS

        taskInput = document.getElementById('taskInput');
        addTaskBtn = document.getElementById('addTaskBtn');
        taskList = document.getElementById('taskList');
    });

    test('Deve adicionar uma nova tarefa', () => {
        taskInput.value = 'Nova Tarefa';
        addTaskBtn.click();

        const tasks = taskList.getElementsByTagName('li');
        expect(tasks.length).toBe(1);
        expect(tasks[0].textContent).toContain('Nova Tarefa');
    });

    test('Deve remover uma tarefa', () => {
        taskInput.value = 'Tarefa a Remover';
        addTaskBtn.click();

        const removeBtn = taskList.querySelector('li button');
        removeBtn.click();

        const tasks = taskList.getElementsByTagName('li');
        expect(tasks.length).toBe(0);
    });
});
