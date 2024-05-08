import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string,
    title: string,
    checked: boolean,
}

const tasks = new Map<string, Task>();

const samples = [
    {
        id: uuidv4(),
        title: "Teste",
        checked: false
    },
    {
        id: uuidv4(),
        title: "Teste 2",
        checked: true
    }
]

for (const sample of samples) {
    tasks.set(sample.id, sample);
}

export function createTask(title: string) {
    const task = {
        id: uuidv4(),
        title: title,
        checked: false
    };

    tasks.set(task.id, task);
}

export function toggleTask(id:string) {
    if (!tasks.has(id)) {
        return;
    }

    const task = tasks.get(id)!;

    task.checked = !task.checked;
}

export function getTasks() {
    return Array.from(tasks.values())
}