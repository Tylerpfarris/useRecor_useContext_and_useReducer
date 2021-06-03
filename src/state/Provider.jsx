import React, { createContext, useContext, useReducer } from 'react';

const useRecordContext = createContext();


export const Provider = ({ children, reducer, initialState }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <useRecordContext.Provider value={{ state, dispatch }}>{children}</useRecordContext.Provider>
   );
};

export const useSelector = (selector) => {
   const { state } = useContext(useRecordContext);
   return selector(state);
}

export const useDispatch = () => {
   const { dispatch } = useContext(useRecordContext);
   return dispatch;
}

