import { API } from '../config';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function fetchMessages(channel) {
  // fetch messages from db
  return fetch(`${API}/channels/${channel.id}/messages`)
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

export function sendMessage(content, currentUser, channel) {
  // make the message
  const message = {
    content,
    author: currentUser.name,
    channel
  }

  // save in db
  return fetch(`${API}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
    .then(res => res.json())
    .then(data => {
      return {
        type: SEND_MESSAGE,
        payload: data
      }
    });
}

export function setCurrentUser(name) {
  return {
    type: SET_CURRENT_USER,
    payload: { name }
  }
}