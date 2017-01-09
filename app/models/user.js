var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  twitch: {
    id: String,
    accessToken: String,
    refreshToken: String,
    email: String,
    username: String
  }
});

module.exports = mongoose.model('User', userSchema);2
