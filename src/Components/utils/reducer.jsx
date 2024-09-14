
export const ACTIONS = {
  SET_DENTISTS: 'SET_DENTISTS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_THEME: 'TOGGLE_THEME',
  ADD_FAV: 'ADD_FAV',
  REMOVE_FAV: 'REMOVE_FAV',
};

export const initialState = {
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: 'light',
  loading: false,
  error: null,
};


export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DENTISTS:
      return { ...state, dentists: action.payload, loading: false };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: true };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case ACTIONS.ADD_FAV:
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    case ACTIONS.REMOVE_FAV:
      const updatedFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    default:
      return state;
  }
};
