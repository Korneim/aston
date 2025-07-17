import { baseApi } from '../../../shared';

export interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const todosApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<
            Todos[],
            {
                limit?: number;
                userId?: number;
                completed?: boolean;
                page?: number;
            }
        >({
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
        updateTodo: builder.mutation<Todos, Partial<Todos>>({
            query: (id, ...data) => ({
                url: `todos/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['TODO'],
        }),
    }),
});

export const { useGetTodosQuery } = todosApi;
