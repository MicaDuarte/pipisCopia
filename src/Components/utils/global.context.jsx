import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, reducer, ACTIONS } from './reducer';


export const ContextGlobal = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDentists = async () => {
      dispatch({ type: ACTIONS.SET_LOADING });
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_DENTISTS, payload: data });
      } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      }
    };

    fetchDentists();
  }, []);

  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  const updateFavs = (favs) => {
    dispatch({ type: ACTIONS.UPDATE_FAVS, payload: favs });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme, updateFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};
