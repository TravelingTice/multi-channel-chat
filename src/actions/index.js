export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
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

export function setChannels() {
  // fetch messages from db
  return fetch(`${API}/channels`)
    .then(res => res.json())
    .then(data => {
      
      return {
        type: SET_CHANNELS,
        payload: data
      }
    });
}