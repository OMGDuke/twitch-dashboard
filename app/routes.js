module.exports = function(app, passport) {
  app.get("/api/login", function(req,res) {
    res.json(
      {
        "Hello": "hi there"
      }
    );
  });
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
}
