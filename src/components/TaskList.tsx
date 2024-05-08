import { Check, Trash } from "@phosphor-icons/react"
import { Task } from "../services/TaskRepository"
import styles from './TaskList.module.css'

interface TaskListProps {
    tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps)
{
    return (
        <div className={styles.container}>
            {tasks.map(task => {
                return <div className={styles.task} key={task.id}>
                    <label>
                        <input type="checkbox"></input>
                        <span className={`${styles.checkbox} ${task.checked && styles.checkboxChecked}`}>
                            {task.checked && <Check size={12} />}
                        </span>

                        <p className={`${task.checked && styles.titleChecked}`}>
                            { task.title }
                        </p>
                    </label>
                    
                    <button><Trash size={14} /></button>
                </div>
            })}
        </div>
    )
}