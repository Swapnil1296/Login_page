import {legacy_createStore as createStore} from 'redux';
const initialState = {
  Auth: '',
};

const reducerFn = (state = initialState, {type, payload}) => {
  if (type === 'LOGIN') {
    return {Auth: state.Auth + payload};
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
