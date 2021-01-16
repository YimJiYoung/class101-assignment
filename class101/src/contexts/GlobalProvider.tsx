import React, { useReducer, createContext, ReactNode } from 'react';
import { GlobalState, Action } from '../types';
import reducer from '../reducers/index';

interface IProps {
  children: ReactNode;
}

const GlobalContext = createContext<[GlobalState, React.Dispatch<Action>]|null>(null);

const ProductProvider = ({ children }: IProps) => {
  const initialState = { cart: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ProductProvider;
