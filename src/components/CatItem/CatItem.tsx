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
      <img src={cat.url} height="225" alt="The cat"/>
      <ButtonLike
        isActive={cat.isLiked}
        clickHandler={() => {
          setIsLiked(!isLiked);
          if (cat.isLiked) {
            dispatch(ActionCreator.removeCatFromFavorites({ catId: cat.id }));
            dispatch(ActionCreator.setInfoMessage(
              { label: 'Ой...', text: 'Вы отобрали лайк у котика'}
            ));
          } else {
            dispatch(ActionCreator.addCatToFavorites({ catId: cat.id }));
            dispatch(ActionCreator.setInfoMessage(
              { label: 'Отлично!', text: 'Котик получил ваш лайк'}
            ));
          }
        }}
      />
    </div>
  )
};

export default CatItem;
