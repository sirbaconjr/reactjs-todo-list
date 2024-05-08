import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string,
    title: string,
    checked: boolean,
}

let localTasks = localStorage.getItem('tasks');
let tasks: Map<string, Task>;

try {
    tasks = (localTasks === null) ? new Map<string, Task>() : new Map(JSON.parse(localTasks));
} catch (e) {
    tasks = new Map<string, Task>();
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify([...tasks]))
}

export function createTask(title: string) {
    const task = {
        id: uuidv4(),
        title: title,
        checked: false
    };

    tasks.set(task.id, task);

    updateLocalStorage();

    return task;
}

export function deleteTask(id: string) {
    if (!tasks.has(id)) {
        return;
    }

    tasks.delete(id);

    updateLocalStorage();
}

export function toggleTask(id: string) {
    if (!tasks.has(id)) {
        return;
    }

    const task = tasks.get(id)!;

    task.checked = !task.checked;

    updateLocalStorage();
}

export function getTasks() {
    return Array.from(tasks.values())
}