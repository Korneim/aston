import {PostCard} from "../../entities/post/ui/PostCard.tsx";
import {mockData} from "./mockData.ts";
import css from './style.module.css'

export function PostList() {
    return (
        <div className={css.list}>
        {mockData.map((el) => (
                <PostCard key={el.title} postInfo={el} />
            ))}
        </div>
            )
}
