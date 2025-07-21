import type { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export function Header({ children }: Props) {
    return <div>{children}</div>;
}
