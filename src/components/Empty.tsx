import clipboard from './../assets/clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={ clipboard } className={styles.icon} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itenas a fazer</p>
        </div>
    )
}