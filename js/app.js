var searchApp = angular.module('searchApp', ['ngRoute']);

searchApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/:movieTitle', {
      templateUrl: 'partials/searchResults.html',
      controller: 'resultsController'
    })
    .when('/:imdbID/show', {
      templateUrl: 'partials/showMovie.html',
      controller: 'showController'
    })
  // $locationProvider.html5Mode(true);
})

searchApp.filter('plusSyntax', function () {
  return function (input) {
    return input.replace(/ /g, "+");
  };
});
