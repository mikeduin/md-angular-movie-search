searchApp.controller('mainController', function ($scope, $location, $routeParams) {
  $scope.view = {};
  $scope.movie = {};
  $scope.formSubmit = function (movie) {
    $scope.movie = {};
    $location.path('/' + movie.title);
  }
});

searchApp.controller('resultsController', function ($scope, $location, $routeParams, $http) {
  $scope.view = {};
  $scope.searchTitle = $routeParams.movieTitle.replace(/ /g, "+");
  $http.get('http://www.omdbapi.com/?s='+$scope.searchTitle) .then(function(data){
    $scope.searchResults = data.data.Search;
  });
})

searchApp.controller('showController', function ($scope, $location, $routeParams, $http) {
  $scope.view = {};
  $scope.movie = {};
  $http.get('http://www.omdbapi.com/?i='+$routeParams.imdbID) .then(function(data){
    console.log(data.data);
    $scope.movie.title = data.data.Title;
    $scope.movie.starring = data.data.Actors;
    $scope.movie.awards = data.data.Awards;
    $scope.movie.country = data.data.Country;
    $scope.movie.director = data.data.Director;
    $scope.movie.genre = data.data.Genre;
    $scope.movie.language = data.data.Language;
    $scope.movie.metascore = data.data.Metascore;
    $scope.movie.plot = data.data.Plot;
    $scope.movie.poster = data.data.Poster;
    $scope.movie.rated = data.data.Rated;
    $scope.movie.released = data.data.Released;
    $scope.movie.runtime = data.data.Runtime;
    $scope.movie.writers = data.data.Writer;
    $scope.movie.year = data.data.Year;
    $scope.movie.imdbRating = data.data.imdbRating;
    $scope.movie.imdbVotes = data.data.imdbVotes;
  });
})
