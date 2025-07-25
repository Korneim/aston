import type { ComponentType } from 'react';
import type { Post } from '../../../entities';

interface WithLoadingProps {
    isLoading: boolean;
    posts: Post[];
}

export function withLoading<P extends object>(Component: ComponentType<P>): ComponentType<P & WithLoadingProps> {
    return function WithLoading({ isLoading, posts = [], ...props }: P & WithLoadingProps) {
        if (isLoading) {
            return (
                <div
                    style={{
                        display: 'flex',
                        width: '100vw',
                        height: '80vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: ' #6c757d',
                        fontSize: '1.2rem',
                    }}
                >
                    Loading...
                </div>
            );
        }
        if (!posts?.length) {
            return <div>No posts found</div>;
        }
        return <Component {...props} posts={posts} />;
    };
}
