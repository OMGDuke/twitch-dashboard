describe("twitchDashboardApp", function () {
  beforeEach(function() {
    browser.get('/');
  });

  describe("headings and titles", function() {
    it("should get home page title", function() {
      expect(browser.getTitle()).toEqual("Twitch Dashboard");
    });
    it("Displays text from the home view", function() {
      expect($('.hello-text').getText()).toMatch("");
    });
  });
});
