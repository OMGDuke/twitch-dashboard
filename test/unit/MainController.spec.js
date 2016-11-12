describe('MainController', function() {

  var MainController;

  beforeEach(function() {
    module('twitchDashboardApp', function() {
    });
  });

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    mainController = $controller('MainController', {
      $scope: scope
    });
  }));

  describe('initialization', function() {
    it("implement test", function() {
      expect(1).toEqual(1);
    })
  });
});
