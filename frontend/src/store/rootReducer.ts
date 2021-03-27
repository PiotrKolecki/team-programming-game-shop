import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // REDUCERS to put here
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
