import type { JSX } from 'react';

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
    keyExtractor: (item: T) => string | number;
    className?: string;
    childrenClassName?: string;
}

export function ItemList<T>({
    items,
    renderItem,
    keyExtractor,
    className,
    childrenClassName,
}: ItemListProps<T>): JSX.Element {
    return (
        <div className={className}>
            {items.map((item) => (
                <div className={childrenClassName} key={keyExtractor(item)}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
}
