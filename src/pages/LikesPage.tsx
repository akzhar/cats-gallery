import React from 'react';

import CatList from '@components/CatList';

const LikesPage: React.FC = () =>  (
  <>
    <h1 className='visually-hidden'>Мои любимые котики</h1>
    <CatList isFavorites />
  </>
);

export default LikesPage;


