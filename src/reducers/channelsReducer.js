import { SET_MESSAGES } from '../actions';

export default function(state, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}