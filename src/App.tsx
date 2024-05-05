import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import styles from './App.module.css'
import { TaskInfo } from './components/TaskInfo'
import { Empty } from './components/Empty'

export function App() {

  return (
    <>
      <main>
        <Header />
        <section className={styles.container}>
          <TaskInput />
          <TaskInfo />
          <Empty />
        </section>
      </main>
    </>
  )
}