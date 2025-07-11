type ButtonProps = {
    onClick?: () => void;
    text: string;
    className?: string;
};

export const Button = ({ onClick, text, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};
