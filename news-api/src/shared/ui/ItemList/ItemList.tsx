import type { ReactNode } from 'react';

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    keyExtractor: (item: T) => string | number;
    className?: string;
    childrenClassName?: string;
}

export function ItemList<T>({ items, renderItem, keyExtractor, className, childrenClassName }: ItemListProps<T>) {
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
