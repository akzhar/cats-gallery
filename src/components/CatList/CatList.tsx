import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatItem from '@components/CatItem';
import Hint from '@components/Hint';
import { TState } from '@store/reducer';
import { TCat } from '@store/reducerCats';
import ActionCreator from '@store/actions';

import useOnScreen from '../../hooks/useOnScreen';

const CatList: React.FC = () => {

  const cats: TCat[] = useSelector((state: TState) => state.cats.items);
  const isLoading: boolean = useSelector((state: TState) => state.cats.isLoading);

  const lastItemRef = useRef(null);
  const isLastItemOnScreen = useOnScreen(lastItemRef, [cats]);

  const [needLoadMore, setNeedLoadMore] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cats.length === 0 || isLastItemOnScreen) {
      setPageNum(prev => prev + 1);
      setNeedLoadMore(true);
    }
  }, [isLastItemOnScreen]);

  useEffect(() => {
    if (needLoadMore) {
      dispatch(ActionCreator.loadCats({pageIndex: pageNum - 1}));
      setNeedLoadMore(false);
    }
  }, [needLoadMore]);

  return (
    <>
      <ul className="cat-list">
        {cats.map((cat: TCat, index: number) => {
            const isLastItem = Boolean(index === cats.length - 1);
            return isLastItem ?
              <li key={`${cat.id}-${index}`} ref={lastItemRef}><CatItem cat={cat} /></li>
            :
              <li key={`${cat.id}-${index}`}><CatItem cat={cat} /></li>;
          })}
      </ul>
      {isLoading && <Hint message={`... загружаем${cats.length ? ' ещё ' : ' '}котиков ...`} />}
    </>
  )
};

export default CatList;
