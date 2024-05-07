import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'
import { useState } from 'react'
import { Task, createTask } from '../services/TaskRepository';

interface TaskInputProps {
    onSave: (task: Task) => void
}

export function TaskInput({ onSave }: TaskInputProps) {
    const [titleInput, setTitleInput] = useState('');

    function saveTask() {
        if (!titleInput) {
            return;
        }

        const task = createTask(titleInput);

        setTitleInput('');
        onSave(task)
    }

    return (
        <div className={styles.container}>
            <input
            onChange={(e) => setTitleInput(e.target.value)} 
            value = {titleInput}
            type='text' placeholder='Adicione uma nova tarefa' />
            <button onClick={saveTask}>
                Criar
                <PlusCircle size={16} weight='bold' />
            </button>
        </div>
    )
}