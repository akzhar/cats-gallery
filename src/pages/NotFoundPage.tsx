import React from 'react';
import { useDispatch } from 'react-redux';

import ActionCreator from '@store/actions';

const NotFoundPage: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.setWarningMessage(
      {
        label: '404 Error:',
        text: 'The requested resource was not found...'
      }
    ));
  });

  return (
    <>
      It seems the page you are looking for is not exists...
    </>
  )
};

export default NotFoundPage;
