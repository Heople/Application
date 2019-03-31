var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);
app.controller('ProgrammeController', function($scope){

  $scope.programme = [
    {id: 0,nom: 'exercice1', description: 'exercice1', repetition: 10, temps: 30, url: 'https://www.youtube.com/watch?v=XWEkGT7XP08'},
    {id: 1,nom: 'exercice2', description: 'exercice2', repetition: 5, temps: 10, url: "https://www.youtube.com/watch?v=PJielywHIjY"},
    {id: 2,nom: 'exercice3', description: 'exercice3', repetition: 20, temps: 60, url: "https://www.youtube.com/watch?v=o85w80g2Aq4"},
  ]

});
