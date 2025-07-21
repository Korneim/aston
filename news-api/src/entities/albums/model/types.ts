export interface AlbumsFilters {
    userId?: number;
    completed?: boolean;
    limit: number;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}
