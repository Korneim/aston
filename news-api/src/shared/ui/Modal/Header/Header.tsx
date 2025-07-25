import type { JSX, PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren): JSX.Element {
    return <div>{children}</div>;
}
