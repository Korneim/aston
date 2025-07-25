export interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface FilterTodos {
    limit?: number;
    userId?: number;
    completed?: boolean;
    page?: number;
}
