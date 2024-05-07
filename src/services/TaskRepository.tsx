import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string,
    title: string,
    checked: boolean,
}

let tasks: Task[] = []

export function createTask(title: string) {
    return {
        id: uuidv4(),
        title: title,
        checked: false
    };
}

export function getTasks() {
    return tasks
}