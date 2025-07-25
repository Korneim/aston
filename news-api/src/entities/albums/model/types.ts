export interface AlbumsFilters {
    userId?: number;
    completed?: boolean;
    limit: number;
    page?: number;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface Albums {
    userId: number;
    id: number;
    title: string;
}

export interface Photos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PhotosFilters {
    limit?: number;
    id?: number;
}
