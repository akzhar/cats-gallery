import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TState } from '@store/reducer';
import CatList from '@components/CatList';
import ActionCreator from '@store/actions';

const HomePage: React.FC = () => {

  const catsCount: number = useSelector((state: TState) => state.cats.all.length);

  // TODO: on scroll call setNeedLoadMore(true);
  const [needLoadMore, setNeedLoadMore] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (catsCount === 0 || needLoadMore) {
      dispatch(ActionCreator.loadCats());
      setNeedLoadMore(false);
    }
  }, [needLoadMore]);

  return (
    <>
      <h1 className='visually-hidden'>Список всех котиков</h1>
      <CatList />
    </>
  )
};

export default HomePage;


