import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actions';
import { Product, GlobalState, Action } from '../types';

function reducer(state: GlobalState, action: Action):GlobalState {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload as Product] };
    default:
      throw new Error();
  }
}

export default reducer;
