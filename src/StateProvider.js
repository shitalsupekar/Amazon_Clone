import React, { createContext, useContext, useReducer } from 'react';

// Create the context
// Prepares the datalayer
export const StateContext = createContext();

// Create the StateProvider component
//wrap our app and Provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create the useStateValue hook
//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
