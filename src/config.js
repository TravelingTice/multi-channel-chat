const devConfig = {
  API: 'http://localhost:3001/api/v1'
}

const prodConfig = {
  API: 'https://secure-cliffs-10223.herokuapp.com/api/v1'
}

module.exports = {
  APP_NAME: 'Multi-channel-chat',
  API: process.env.NODE_ENV === 'production' ? prodConfig.API : devConfig.API
}