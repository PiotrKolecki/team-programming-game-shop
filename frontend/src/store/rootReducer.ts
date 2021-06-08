import { combineReducers } from "redux";
import catalogue from "./catalogue/index";
import userReducer from "./user/reducer";
import ordersReducer from "./orders/reducer";
import cartReducer from './cart/index';

const rootReducer = combineReducers({
  user: userReducer,
  catalogue,
  orders: ordersReducer,
  cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
