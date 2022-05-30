import { TCat } from '@store/reducerCats';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  // message
  RESET_MESSAGE = 'reset message',
  SET_WARNING_MESSAGE = 'set warning message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  HIDE_MESSAGE = 'hide message',
  // cats
  RESET_CATS = 'reset cats',
  SET_IS_LOADING_TRUE = 'loading...',
  SET_IS_LOADING_FALSE = 'loading finished',
  LOAD_CATS = 'load cats',
  ADD_CAT_TO_FAVORITES = 'add cat to favorites',
  REMOVE_CAT_FROM_FAVORITES = 'remove cat from favorites'
}

interface ISetWarningMessage {
  label: string,
  text?: string
}

interface IAddCatToFavorites {
  catId: string
}

interface IRemoveCatFromFavorites {
  catId: string
}

const ActionCreator = {
  reset: () => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.RESET_MESSAGE});
      dispatch({ type: ActionTypes.RESET_CATS});
    }
  },
  setInfoMessage: ({ label, text }: ISetWarningMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_INFO_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  setWarningMessage: ({ label, text }: ISetWarningMessage) => {
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
      setTimeout(() => {
        dispatch({ type: ActionTypes.RESET_MESSAGE});
      }, 1500);
    }
  },
  loadCats: () => {
    const API_URL = 'https://api.thecatapi.com/v1/images/search';
    const API_KEY = '494b6b39-efb8-492b-aa92-c050914312a0';
    const catsCount = 10;
    return (dispatch: (action: TAction) => void) => {
      dispatch({ type: ActionTypes.SET_IS_LOADING_TRUE});
      fetch(`${API_URL}?limit=${catsCount}`, { headers: {method: 'GET', 'x-api-key': API_KEY} })
        .then(res => res.json())
        .then(data => {
          const newCats: TCat[] = data.map(({id, url}: any) => { return { id, url, isLiked: false } });
          dispatch({ type: ActionTypes.LOAD_CATS, payload: newCats });
          dispatch({ type: ActionTypes.SET_IS_LOADING_FALSE});
        });
    }
  },
  addCatToFavorites: ({ catId }: IAddCatToFavorites) => {
    return { type: ActionTypes.ADD_CAT_TO_FAVORITES, payload: catId };
  },
  removeCatFromFavorites: ({ catId }: IRemoveCatFromFavorites) => {
    return { type: ActionTypes.REMOVE_CAT_FROM_FAVORITES, payload: catId };
  }
};

export default ActionCreator;
