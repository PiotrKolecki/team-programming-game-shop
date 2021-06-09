import { combineReducers } from "redux";
import catalogue from "./catalogue/index";
import userReducer from "./user/reducer";
import ordersReducer from "./orders/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  catalogue,
  orders: ordersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
