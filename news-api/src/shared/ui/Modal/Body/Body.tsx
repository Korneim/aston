import type { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export function Body({ children }: Props) {
    return <div>{children}</div>;
}
