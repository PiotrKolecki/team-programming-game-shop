import { combineReducers } from "redux";
import catalogue from './catalogue/index';

const rootReducer = combineReducers({
  catalogue,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
