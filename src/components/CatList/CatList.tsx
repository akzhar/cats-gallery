import React from 'react';
import { useSelector } from 'react-redux';

import CatItem from '@components/CatItem';
import { TState } from '@store/reducer';
import { TCat } from '@store/reducerCats';

type TCatList = {
  isFavorites?: boolean
}

const CatList: React.FC<TCatList> = ({ isFavorites = false }: TCatList) => {

  const cats: TCat[] = useSelector((state: TState) => isFavorites? state.cats.favorites : state.cats.all);
  const isLoading: boolean = useSelector((state: TState) => state.cats.isLoading);

  return (
    cats.length
      ?
    <>
      <ul className="cat-list">
        {
          cats.map((cat: TCat) => (
            <li key={cat.id}>
              <CatItem cat={cat}/>
            </li>
          ))
        }
      </ul>
      {isLoading && <p>... загружаем ещё котиков ...</p>}
    </>
      :
    <p>{isLoading ? 'Загружаем котиков...' : 'Тут пока что пусто...'}</p>
  )
};

export default CatList;
