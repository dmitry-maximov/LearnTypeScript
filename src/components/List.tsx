import React, { ReactNode } from 'react';

interface ListProps<T> {
  items: T[] | null;
  renderItem: (item: T) => ReactNode;
}

// Используем function а не => для того чтобы корректно отрабатывали дженерики
export default function List<T>(props: ListProps<T>) {
  return <div>{props.items?.map(props.renderItem)}</div>;
}
