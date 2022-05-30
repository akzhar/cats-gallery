import React from 'react';
import { useDispatch } from 'react-redux';

import Message from '@components/Message';
import ActionCreator from '@store/actions';

const NotFoundPage: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.setWarningMessage(
      {
        label: 'Код ошибки 404:',
        text: 'Запрошенный ресурс не был найден...'
      }
    ));
  });

  return (
    <>
      Кажется, такой страницы не существует...
    </>
  )
};

export default NotFoundPage;
