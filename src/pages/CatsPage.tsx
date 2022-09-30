import React from 'react';

import CatList from '@components/CatList';

const HomePage: React.FC = () => (
  <>
    <h1 className="visually-hidden">All cats</h1>
    <CatList />
  </>
);

export default HomePage;


