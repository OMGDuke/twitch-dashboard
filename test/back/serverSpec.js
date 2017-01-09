var expect = require("chai").expect;
var request = require ("request");

describe("Express Backend", function() {
  describe("hosts a server", function() {

    var url = "http://localhost:8080/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("twitch auth", function() {

    var url = "http://localhost:8080/auth/twitch";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("authenticateduser route", function() {

    var url = "http://localhost:8080/authenticateduser";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("tells you if no one is logged in", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("No Authenticated User");
        done();
      });
    });
  });
});
