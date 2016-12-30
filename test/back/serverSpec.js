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
});
