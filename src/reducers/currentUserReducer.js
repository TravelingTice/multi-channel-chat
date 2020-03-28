import { SET_CURRENT_USER } from '../actions';

export default function(state, action) {
  if (state === undefined) return null;
  
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}