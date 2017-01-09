module.exports = {
  'twitchAuth': {
    'clientID': process.env.TWITCH_ID,
    'clientSecret': process.env.TWITCH_SECRET,
    'callbackURL': 'http://localhost:8080/auth/twitch/callback'
  }
}
