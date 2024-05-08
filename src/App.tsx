import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import styles from './App.module.css'
import { TaskInfo } from './components/TaskInfo'
import { Empty } from './components/Empty'
import { useState } from 'react'
import { Task, getTasks } from './services/TaskRepository'
import { TaskList } from './components/TaskList'

export function App() {
  const [tasks, setTasks] = useState<Task[]>(getTasks());
  const checked = tasks.reduce((prev, curr) => { return prev + (curr.checked ? 1 : 0) }, 0)

  function handleTaskSaved(task: Task) {
    setTasks([...tasks, task])
  }

  return (
    <>
      <main>
        <Header />
        <section className={styles.container}>
          <TaskInput onSave={handleTaskSaved} />
          <TaskInfo total={tasks.length} checked={checked} />
          { (tasks.length > 0) ? <TaskList tasks={tasks} /> : <Empty /> }
        </section>
      </main>
    </>
  )
}