import React from 'react';

type TButtonProps = {
  isActive: boolean,
  clickHandler?: () => void
}

const ButtonLike: React.FC<TButtonProps> = ({ isActive, clickHandler = () => undefined }: TButtonProps) => (
  <button className={`button-like ${isActive && 'button-like--active'}`} onClick={clickHandler}>
    <span className='visually-hidden'>Лайк</span>
  </button>
);

export default ButtonLike;
