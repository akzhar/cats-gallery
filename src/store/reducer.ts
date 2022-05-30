import { combineReducers } from 'redux';

import reducerMessage, { TMessageState } from '@store/reducerMessage';
import reducerCats, { TCatsState } from '@store/reducerCats';

export type TState = {
  message: TMessageState,
  cats: TCatsState
};

const reducer = combineReducers({
  message: reducerMessage,
  cats: reducerCats
});

export default reducer;
