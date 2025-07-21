export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Filters {
    limit?: number;
    userId?: number;
    page?: number;
}
