import React from 'react';

import CatList from '@components/CatList';

const HomePage: React.FC = () => (
  <>
    <h1 className="visually-hidden">Список всех котиков</h1>
    <CatList />
  </>
);

export default HomePage;


