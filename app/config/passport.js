var TwitchStrategy = require('passport-twitch').Strategy;

var User = require('../models/user');
var configAuth = require('./auth');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // TWITCH
  passport.use(new TwitchStrategy({
    clientID: configAuth.twitchAuth.clientID,
    clientSecret: configAuth.twitchAuth.clientSecret,
    callbackURL: configAuth.twitchAuth.callbackURL,
    scope: "user_read"
  }, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({
        'twitch.id': profile.id
      }, function(err, user) {
        if(err) {
          return done(err);
        } else if (user) {
          return done(null, user);
        } else {
          var newUser = new User();
          newUser.twitch.id = profile.id;
          newUser.twitch.accessToken = accessToken;
          newUser.twitch.refreshToken = refreshToken;
          newUser.twitch.username = profile.username;
          newUser.twitch.email = profile.email;

          newUser.save(function(err) {
            if(err) {
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));
};
