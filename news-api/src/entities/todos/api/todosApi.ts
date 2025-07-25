import { baseApi } from '../../../shared';
import type { FilterTodos, Todos } from '../model';

export const todosApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todos[], FilterTodos>({
            query: (params) => ({
                url: 'todos',
                params: {
                    _limit: params.limit,
                    _page: params.page,
                    userId: params.userId,
                    completed: params.completed,
                },
            }),
            providesTags: ['TODO'],
        }),
        getTodoByID: builder.query<Todos, number>({
            query: (id) => `todos/${id}`,
            providesTags: ['TODO'],
        }),
        updateTodo: builder.mutation<Todos, { id: number; data: Partial<Todos> }>({
            query: ({ id, ...data }) => ({
                url: `todos/${id.toString()}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['TODO'],
        }),
    }),
});

export const { useGetTodosQuery } = todosApi;
