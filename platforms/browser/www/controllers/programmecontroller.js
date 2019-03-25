var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);
app.controller('ProgrammeController', function($scope){

  $scope.programme = [
    {id: 0,nom: 'exercice1', description: 'exercice1', repetition: 10, temps: 30},
    {id: 1,nom: 'exercice2', description: 'exercice2', repetition: 5, temps: 10},
    {id: 2,nom: 'exercice3', description: 'exercice3', repetition: 20, temps: 60},
    {id: 3,nom: 'exercice4', description: 'exercice4', repetition: 5, temps: 20},
  ]

});
