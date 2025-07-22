import { useParams } from 'react-router';
import { useGetPostsQuery } from '../../../entities';
import css from './UserPostPage.module.css';
import { ItemList } from '../../../shared/ui/ItemList/ItemList.tsx';
import type { Post } from '../../../entities/post/model';

export function UserPostsPage() {
    const { id } = useParams();
    const filters = {
        limit: 100,
        userId: Number(id),
        page: undefined,
    };
    const { data: list = [], isLoading } = useGetPostsQuery(filters);

    if (isLoading) {
        return (
            <div className={css.loadingContainer}>
                <div className={css.spinner}></div>
                <p>Загружаем посты пользователя...</p>
            </div>
        );
    }

    return (
        <div className={css.container}>
            <header className={css.header}>
                <h1 className={css.title}>
                    Посты пользователя <span className={css.userId}>#{id}</span>
                </h1>
                <div className={css.postsCount}>Всего постов: {list.length}</div>
            </header>

            <div className={css.postsContainer}>
                <ItemList<Post>
                    items={list}
                    keyExtractor={(post) => post.id}
                    className={css.postsContainer}
                    childrenClassName={css.postCard}
                    renderItem={(post) => (
                        <div key={post.id}>
                            <h3 className={css.postTitle}>{post.title}</h3>
                            <p className={css.postBody}>{post.body}</p>
                            <footer className={css.postFooter}>
                                <span className={css.postId}>ID: {post.id}</span>
                                <span className={css.userBadge}>User ID: {post.userId}</span>
                            </footer>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}
