import styles from './TaskInfo.module.css'

export function TaskInfo() {
    return (
        <div className={ styles.container }>
            <div>
                <span className={styles.createdSpan}>Tarefas criadas</span>
                <span className={styles.badge}>0</span>
            </div>
            <div>
                <span className={styles.doneSpan}>Concluídas</span>
                <span className={styles.badge}>0</span>
            </div>
        </div>
    )
}