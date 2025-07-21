import type { ComponentType } from 'react';

interface WithLoadingProps {
    isLoading: boolean;
}

export function withLoading<P extends object>(Component: ComponentType<P>): ComponentType<P & WithLoadingProps> {
    return function WithLoading({ isLoading, ...props }: P & WithLoadingProps) {
        if (isLoading) {
            return (
                <div
                    style={{
                        display: 'flex',
                        width: '100vw',
                        height: '80vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Loading...
                </div>
            );
        }
        return <Component {...props} />;
    };
}
