import React from 'react';

import CatListFavorites from '@components/CatList/Favorites';

const FavoritesPage: React.FC = () =>  (
  <>
    <h1 className="visually-hidden">My cats</h1>
    <CatListFavorites />
  </>
);

export default FavoritesPage;


