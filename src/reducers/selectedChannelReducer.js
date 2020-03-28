import { SET_SELECTED_CHANNEL } from '../actions';

export default function(state, action) {
  switch (action.type) {
    case SET_SELECTED_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}