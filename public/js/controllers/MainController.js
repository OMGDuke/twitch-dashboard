angular.module('twitchDashboardApp')
  .controller('MainController', function($scope, $http){

    var self = this;

    self.user = null;

    $http({
      method: 'GET',
      url: '/authenticateduser'
    }).then(function successCallback(response) {
      if(response.data === "No Authenticated User") {
        self.user = null;
      } else {
        self.user = response.data.twitch;
      }
      console.log(self.user);
    }, function errorCallback(response) {
      console.log("Error retrieving user: " + response);
    });

});
