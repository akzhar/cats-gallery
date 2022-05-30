import { ActionTypes, TAction } from '@store/actions';

export type TCat = {
  id: string,
  url: string,
  isLiked: boolean
};

export type TCatsState = {
  isLoading: boolean,
  all: TCat[],
  favorites: TCat[]
};

const initialState: TCatsState = { isLoading: false, all: [], favorites: [] };

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
      // TODO: unique cats only?
      //return {...state, all: [...state.all, newCats]};
      return {...state, all: newCats};
    }
    case ActionTypes.ADD_CAT_TO_FAVORITES: {
      const catId: string = action.payload;
      const cat = state.all.find((cat: TCat) => cat.id === catId);
      if (cat) {
        cat.isLiked = true;
        return {...state, favorites: [...state.favorites, cat]};
      } else {
        return state;
      }
    }
    case ActionTypes.REMOVE_CAT_FROM_FAVORITES: {
      const catId: string = action.payload;
      return {...state, favorites: [...state.favorites.filter((cat: TCat) => cat.id !== catId)]};
    }
    default:
      return state;
  }
};

export default reducerCats;
