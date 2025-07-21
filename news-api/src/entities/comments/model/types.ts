export interface Comments {
    postId: number;
    id: number;
    name: string;
    body: string;
    email: string;
}

export interface Filters {
    limit?: number;
    userId?: number;
    completed?: boolean;
    page?: number;
}
