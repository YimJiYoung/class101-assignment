import React, {
  useReducer, useContext, createContext, ReactNode,
} from 'react';
import { GlobalState, Action } from '../types';
import reducer from '../reducers/index';

interface IProps {
  children: ReactNode;
}

export const GlobalContext = createContext<[GlobalState, React.Dispatch<Action>]>([{ cart: [] }, () => null]);

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

const GlobalProvider = ({ children }: IProps) => {
  const initialState = { cart: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
