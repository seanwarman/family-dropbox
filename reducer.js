import appReducer from './App.reducer';

export default function reducer(state = {
}, action) {
  return {
    app: appReducer(state.app, action),
  };
}
