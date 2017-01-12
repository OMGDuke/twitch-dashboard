var twitchDashboardApp = angular.module('twitchDashboardApp', ['ui.router']);

twitchDashboardApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'MainController'
    })

    $urlRouterProvider.otherwise('/');
    if(window.history && window.history.pushState){
     $locationProvider.html5Mode({enabled: true});
    }
});
