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

  function handleTaskSaved(task: Task) {
    setTasks([...tasks, task])
  }

  return (
    <>
      <main>
        <Header />
        <section className={styles.container}>
          <TaskInput onSave={handleTaskSaved} />
          <TaskInfo />
          { (tasks.length > 0) ? <TaskList tasks={tasks} /> : <Empty /> }
        </section>
      </main>
    </>
  )
}