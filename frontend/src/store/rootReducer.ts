import { combineReducers } from "redux";
import catalogue from "./catalogue/index";
import userReducer from "./user/reducer";
import ordersReducer from "./orders/reducer";
import cartReducer from "./cart/index";
import filtersReducer from './filtering/index';
import searchReducer from './search/index';

const rootReducer = combineReducers({
  user: userReducer,
  catalogue,
  orders: ordersReducer,
  cart: cartReducer,
  filtering: filtersReducer,
  search: searchReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
