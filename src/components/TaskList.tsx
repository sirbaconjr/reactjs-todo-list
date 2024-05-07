import { Task } from "../services/TaskRepository"

interface TaskListProps {
    tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps)
{
    return (
        <>
            {tasks.map(task => {
                return <p key={task.id}>{ task.title }</p>
            })}
        </>
    )
}