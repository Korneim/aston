import { useGetTodosQuery } from '../api/todosApi.ts';
import css from './Todos.module.css';
import * as React from 'react';
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
            userId: value === '' ? undefined : Number(value),
        }));
    };

    const handleCompletedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilters((prev) => ({
            ...prev,
            completed: value === '' ? undefined : value === 'true',
        }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.filters}>
                <div>
                    <label>Фильтр по ID пользователя: </label>
                    <input
                        type="number"
                        value={filters.userId || ''}
                        onChange={handleUserIdChange}
                        placeholder="Все пользователи"
                        min="1"
                    />
                </div>

                <div>
                    <label>Фильтр по статусу: </label>
                    <select
                        value={filters.completed === undefined ? '' : String(filters.completed)}
                        onChange={handleCompletedChange}
                    >
                        <option value="">Все задачи</option>
                        <option value="true">Выполненные</option>
                        <option value="false">Не выполненные</option>
                    </select>
                </div>
            </div>

            <h3>Список задач пользователей:</h3>
            {todos.map((todo) => (
                <div key={todo.id} className={css.content}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <div>ID пользователя:{todo.userId}</div>
                        <div className={css.name}> {todo.title}</div>
                        {todo.completed ? (
                            <div style={{ color: 'green' }}>Задача выполнена</div>
                        ) : (
                            <div style={{ color: 'red' }}>Задача не выполнена</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
