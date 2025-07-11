import type { FC, ReactNode } from 'react';
import { useTheme } from '../lib';

type Props = {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
};

export const MainLayout: FC<Props> = ({ children, header, footer }) => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                background: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {header}
            {children}
            {footer}
        </div>
    );
};
