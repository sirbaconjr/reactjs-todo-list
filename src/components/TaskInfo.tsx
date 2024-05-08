import styles from './TaskInfo.module.css'

interface TaskInfoProps {
    total: number,
    checked: number
}

export function TaskInfo({total, checked}: TaskInfoProps) {
    return (
        <div className={ styles.container }>
            <div>
                <span className={styles.createdSpan}>Tarefas criadas</span>
                <span className={styles.badge}>{total}</span>
            </div>
            <div>
                <span className={styles.doneSpan}>Concluídas</span>
                <span className={styles.badge}>{(checked) > 0 ? `${checked} de ${total}` : 0}</span>
            </div>
        </div>
    )
}