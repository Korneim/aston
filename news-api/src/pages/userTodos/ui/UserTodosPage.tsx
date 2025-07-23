import { useParams } from 'react-router';
import { useGetTodosQuery } from '../../../entities';
import css from './UserTodosPage.module.css';

export function UserTodosPage() {
    const { id } = useParams();
    const filters = {
        limit: 100,
        userId: Number(id),
        completed: undefined,
        page: undefined,
    };
    const { data: list = [], isLoading } = useGetTodosQuery(filters);

    if (isLoading) {
        return <div className={css.loading}>Загрузка задач...</div>;
    }

    return (
        <div className={css.container}>
            <h2 className={css.title}>Задачи пользователя #{id}</h2>

            <div className={css.todosList}>
                {list.map((todo) => (
                    <div key={todo.id} className={css.todoCard}>
                        <div className={css.todoHeader}>
                            <span className={css.userId}>User ID: {todo.userId}</span>
                            <span className={todo.completed ? css.completed : css.notCompleted}>
                                {todo.completed ? '✓ Выполнено' : '✗ Не выполнено'}
                            </span>
                        </div>
                        <p className={css.todoTitle}>{todo.title}</p>
                        <div className={css.todoId}>ID задачи: {todo.id}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
