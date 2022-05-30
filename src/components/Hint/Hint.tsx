import React from 'react';

type THintProps = {
  message?: string
}

const Hint: React.FC<THintProps> = ({ message }: THintProps) => (
  <p className="hint">{message}</p>
);

export default Hint;
