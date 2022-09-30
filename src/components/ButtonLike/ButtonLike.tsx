import React from 'react';

type TButtonProps = {
  isActive: boolean,
  clickHandler?: () => void
}

const ButtonLike: React.FC<TButtonProps> = ({ isActive, clickHandler = () => undefined }: TButtonProps) => (
  <button
    className={`button-like ${isActive && 'button-like--active'}`}
    onClick={clickHandler}
    title={isActive ? 'Remove like' : 'Like'}
  >
    <span className="visually-hidden">{isActive ? 'Remove like' : 'Like'}</span>
  </button>
);

export default ButtonLike;
