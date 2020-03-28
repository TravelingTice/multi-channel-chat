import { SET_CHANNELS } from '../actions';

export default function(state, action) {
  if (state === undefined) return [];
  
  switch (action.type) {
    case SET_CHANNELS:
      return action.payload;
    default:
      return state;
  }
}