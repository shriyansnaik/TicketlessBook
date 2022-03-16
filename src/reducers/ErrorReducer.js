import {} from './ActionTypes';

var INITIAL_STATE = {
  home_screen_error: '',
  search_screen_error: '',
};

export default (action, state = INITIAL_STATE) => {
  switch (action.type) {
    default:
      return state;
  }
};
