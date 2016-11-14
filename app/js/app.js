var twitchDashboardApp = angular.module('twitchDashboardApp', ['ui.router', 'ngCookies']);

twitchDashboardApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'MainController'
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "views/dashboard.html",
      controller: 'MainController'
    })

    // $urlRouterProvider.otherwise('/');

    if(window.history && window.history.pushState){
     $locationProvider.html5Mode({enabled: true});
    }

    $httpProvider.defaults.withCredentials = true;
});
