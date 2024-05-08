import { Check, Trash } from "@phosphor-icons/react"
import { Task } from "../services/TaskRepository"
import styles from './TaskList.module.css'

interface TaskListProps {
    tasks: Task[],
    onTaskToggle: (id: string) => void,
    onTaskDelete: (id: string) => void
}

export function TaskList({ tasks, onTaskToggle, onTaskDelete }: TaskListProps)
{
    return (
        <div className={styles.container}>
            {tasks.map(task => {
                return <div className={styles.task} key={task.id}>
                    <label>
                        <input type="checkbox"></input>
                        <span onClick={() => onTaskToggle(task.id)} className={`${styles.checkbox} ${task.checked && styles.checkboxChecked}`}>
                            {task.checked && <Check size={12} />}
                        </span>

                        <p className={`${task.checked && styles.titleChecked}`}>
                            { task.title }
                        </p>
                    </label>
                    
                    <button><Trash onClick={() => onTaskDelete(task.id)} size={14} /></button>
                </div>
            })}
        </div>
    )
}