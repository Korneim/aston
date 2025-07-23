import { useGetTodosQuery } from '../api';
import css from './Todos.module.css';
import { useState } from 'react';

export function Todos() {
    const [filters, setFilters] = useState<{
        userId?: number;
        completed?: boolean;
        limit: number;
    }>({ limit: 100 });

    const { data: todos = [], isLoading } = useGetTodosQuery(filters);

    const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilters((prev) => ({
            ...prev,
            userId: value ? Number(value) : undefined,
        }));
    };

    const handleCompletedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilters((prev) => ({
            ...prev,
            completed: value ? value === 'true' : undefined,
        }));
    };

    if (isLoading) {
        return <div className={css.loadingContainer}>Загрузка задач...</div>;
    }

    return (
        <div className={css.container}>
            <h1 className={css.header}>Управление задачами</h1>

            <div className={css.filterPanel}>
                <div className={css.filterGroup}>
                    <label className={css.filterLabel}>ID пользователя</label>
                    <input
                        type="number"
                        className={css.filterInput}
                        value={filters.userId || ''}
                        onChange={handleUserIdChange}
                        placeholder="Все пользователи"
                        min="1"
                    />
                </div>

                <div className={css.filterGroup}>
                    <label className={css.filterLabel}>Статус задачи</label>
                    <select
                        className={css.filterSelect}
                        value={filters.completed === undefined ? '' : String(filters.completed)}
                        onChange={handleCompletedChange}
                    >
                        <option value="">Все задачи</option>
                        <option value="true">Выполненные</option>
                        <option value="false">Не выполненные</option>
                    </select>
                </div>
            </div>

            <div className={css.todosContainer}>
                <h2 className={css.subheader}>Список задач</h2>
                <div className={css.todosList}>
                    {todos.map((todo) => (
                        <div key={todo.id} className={css.todoCard}>
                            <div className={css.todoHeader}>
                                <span className={css.userId}>User #{todo.userId}</span>
                                <span className={todo.completed ? css.statusCompleted : css.statusPending}>
                                    {todo.completed ? '✓ Выполнено' : '✗ В процессе'}
                                </span>
                            </div>
                            <p className={css.todoTitle}>{todo.title}</p>
                            <div className={css.todoMeta}>
                                <span>ID задачи: {todo.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
