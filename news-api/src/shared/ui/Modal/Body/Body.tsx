import type { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export const Body: FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};
