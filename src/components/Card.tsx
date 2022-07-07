import React, { FC, ReactNode } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string;
  children?: ReactNode;
  variant?: CardVariant;
  onclick?: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onclick, children }) => {
  return (
    <div
      onClick={onclick}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
