import { GET_PRODUCTS, SHOPPING_CAR } from "../type";

const initialState = {
  products: [],
  shoppingCar: [],
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data,
        loading: false,
      };
    case SHOPPING_CAR:
      return {
        ...state,
        shoppingCar:action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
