module.exports = function(app, passport) {
  app.get('/api/auth/twitch', passport.authenticate('twitch'));

  app.get('/auth/twitch/callback', passport.authenticate('twitch', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
}
