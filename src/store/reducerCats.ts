import { ActionTypes, TAction } from '@store/actions';

export type TCat = {
  id: string,
  url: string,
  isLiked: boolean
};

export type TCatsState = {
  isLoading: boolean,
  items: TCat[]
};

const initialState: TCatsState = { isLoading: false, items: [] };

const reducerCats = (state: TCatsState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_CATS: {
      return initialState;
    }
    case ActionTypes.SET_IS_LOADING_TRUE: {
      return {...state, isLoading: true};
    }
    case ActionTypes.SET_IS_LOADING_FALSE: {
      return {...state, isLoading: false};
    }
    case ActionTypes.LOAD_CATS: {
      const newCats: TCat[] = action.payload;
      return {...state, items: [...state.items, ...newCats]};
    }
    case ActionTypes.ADD_CAT_TO_FAVORITES: {
      const catId: string = action.payload;
      const cat = state.items.find((cat: TCat) => cat.id === catId);
      if (cat) {
        cat.isLiked = true;
      }
      return state;
    }
    case ActionTypes.REMOVE_CAT_FROM_FAVORITES: {
      const catId: string = action.payload;
      const cat = state.items.find((cat: TCat) => cat.id === catId);
      if (cat) {
        cat.isLiked = false;
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducerCats;
