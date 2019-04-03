var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);
app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
}]);


app.controller('ProgrammeController', function($scope){



  $scope.programme=[
      {id: 0, nom: "Triple salto du bras gauche", description:"Debout ou assis, le dos bien droit, inclinez la tête sur un côté et tirez doucement avec votre main jusqu’à ressentir l’étirement à la base du cou. Pour plus d’amplitude, la main du côté étiré pourra être placée dans le dos. Étirez de la même façon l’autre côté.", lien: "https://www.youtube.com/watch?v=eLYhnBaWOzc"},
      {id: 1, nom: "Triple salto du bras droit", description:"Faire tournoyer son bras droit dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=o85w80g2Aq4"},
      {id: 2, nom: "Contraction de la fesse droite arrière", description:"Contracter la fesse droite arrière.", lien: "https://www.youtube.com/watch?v=y9eFk8TuV9k"},
      {id: 3, nom: "Contraction de la fesse gauche arrière", description:"Contracter la fesse gauche arrière.", lien: "https://www.youtube.com/watch?v=PJielywHIjY"},
  ]

  $scope.setFirstexercice = function(x){
    console.log(x);
    angular.forEach($scope.programme, function(item){
        if (item.id == x) {
            $scope.videoURL = item.lien;
        }

    });
  }

  $scope.setNextVideo = function(x){
    console.log(x);
    angular.forEach($scope.programme, function(item){
        if (item.id == x) {
            $scope.videoURL = item.lien;

        }

    });
  };



  // angular.forEach($scope.exercices, function(item){
  //         $scope.videoURL = item.lien;
  //         $scope.$digest();
  //
  //
  //
  // })



});
