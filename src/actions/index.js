export const SET_MESSAGES = 'SET_MESSAGES';
const API = 'http://localhost:3000';

export function setMessages() {
  // fetch messages from db
  return fetch(`${API}/messages`)
    .then(res => res.json())
    .then(data => {
      
      return {
        type: SET_MESSAGES,
        payload: data
      }
    });
}