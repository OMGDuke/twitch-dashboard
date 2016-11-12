describe("twitchDashboardApp", function () {
  beforeEach(function() {
    browser.get('/');
  });

  describe("headings and titles", function() {
    it("should get home page title", function() {
      expect(browser.getTitle()).toEqual("Twitch Dashboard");
    });
    it("Displays title on the page", function() {
      expect($('.title').getText()).toMatch("Twitch Dashboard");
    });
  });
  describe("login", function() {
    it("has a twitch login button", function() {
      connect = element(by.css("img[src*='http://ttv-api.s3.amazonaws.com/assets/connect_dark.png']"));
      expect(connect.isPresent()).toBe(true);
    })
  })
});
