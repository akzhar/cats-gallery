import React from 'react';
import { useSelector } from 'react-redux';

import CatItem from '@components/CatItem';
import Hint from '@components/Hint';
import { TState } from '@store/reducer';
import { TCat } from '@store/reducerCats';

const CatListFavorites: React.FC = () => {

  const cats: TCat[] = useSelector((state: TState) => state.cats.items.filter((cat:TCat) => cat.isLiked));

  return (
    cats.length
      ?
    <>
      <ul className="cat-list">
        {cats.map((cat: TCat, index: number) => (
          <li key={`${cat.id}-${index}`}><CatItem cat={cat} /></li>
        ))}
      </ul>
    </>
      :
    <Hint message="Тут пока что пусто..." />
  )
};

export default CatListFavorites;
