import { createStore } from 'redux'

const initialState = {
    featureFlags: {}
};
function rootReducer(state = initialState, action = {}) {
  if (action.type === 'FF_UPDATE') {
      return { ...state, featureFlags: { ...action.payload } };
  }
  return state;
}

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
