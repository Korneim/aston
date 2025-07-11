import { type Post } from '../../../mock';

export function filterByLength(data: Post[], length: number | null) {
    if (!length) {
        return data;
    }
    return data.filter((post) => post.title.length <= length);
}
