import type { JSX } from 'react';

type ButtonProps = {
    onClick?: () => void;
    text: string;
    className?: string;
};

export const Button = ({ onClick, text, className }: ButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};
