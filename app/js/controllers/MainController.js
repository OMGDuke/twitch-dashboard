angular.module('twitchDashboardApp')
  .controller('MainController', function($scope, $window){

    var self = this;

    self.twitchAuthUrl = "https://api.twitch.tv/kraken/oauth2/authorize" +
    "?response_type=token" +
    "&client_id=1234" +
    "&redirect_uri=http://localhost:8080/oauth_callback" +
    "&scope=user_read+channel_read";


  self.logThis = function() {
    console.log(localStorage);
  }
});
