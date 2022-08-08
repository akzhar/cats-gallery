import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TCat } from '@store/reducerCats';
import ButtonLike from '@components/ButtonLike';
import ActionCreator from '@store/actions';

type TCatItemProps = {
  cat: TCat
};

const CatItem: React.FC<TCatItemProps> = ({ cat }: TCatItemProps) => {

  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(cat.isLiked);

  return (
    <div className="cat-list__item">
      <img src={cat.url} alt="The cat"/>
      <ButtonLike
        isActive={cat.isLiked}
        clickHandler={() => {
          setIsLiked(!isLiked);
          if (cat.isLiked) {
            dispatch(ActionCreator.removeCatFromFavorites({ catId: cat.id }));
            dispatch(ActionCreator.setInfoMessage(
              { label: '😥', text: 'Минус 1 котик в разделе Любимые котики'}
            ));
          } else {
            dispatch(ActionCreator.addCatToFavorites({ catId: cat.id }));
            dispatch(ActionCreator.setInfoMessage(
              { label: '😊', text: 'Плюс 1 котик в разделе Любимые котики'}
            ));
          }
        }}
      />
    </div>
  )
};

export default CatItem;
