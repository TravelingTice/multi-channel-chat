import { SET_MESSAGES, SEND_MESSAGE } from '../actions';

export default function(state, action) {
  if (state === undefined) return [];
  
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case SEND_MESSAGE:
      return state.concat(action.payload);
    default:
      return state;
  }
}