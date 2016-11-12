angular.module('twitchDashboardApp')
  .controller('MainController', function($state, $scope){

    var self = this;

  Twitch.init({clientId: 'your client ID here'}, function(error, status) {
    // the sdk is now loaded
  });

  });
