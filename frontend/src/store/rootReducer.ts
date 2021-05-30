import { combineReducers } from "redux";
import catalogue from "./catalogue/index";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  catalogue,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
