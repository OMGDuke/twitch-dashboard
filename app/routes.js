module.exports = function(app, passport) {
  app.get('/auth/twitch', passport.authenticate('twitch'));

  app.get('/auth/twitch/callback', passport.authenticate('twitch', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  // LOG OUT
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/')
  });

  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
}
