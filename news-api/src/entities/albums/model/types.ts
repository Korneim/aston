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

export interface AlbumsFilters {
    albumLimit?: number;
    userId?: number;
    page?: number;
}

export interface PhotosFilters {
    limit?: number;
    id?: number;
}
