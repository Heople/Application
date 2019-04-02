
  var app = angular.module('ExerciceCompletion', ['ngRoute', 'ngYoutubeEmbed']);
  app.controller('ExerciceController',function($scope) {


    /* Initialisation de "fausses" données. Permet d'empecher l'erreur mineure "invalid youtube video URL or ID to render the iframe embed player".  */
    $scope.name = "nom placeholder";
    $scope.description ="description placeholder.";
    $scope.videoURL = 'https://www.youtube.com/watch?v=XWEkGT7XP08';

    /* Fonction appellée au clique sur un exercice sur la home PAGE
    Permet de changer dynamiquement les champs nom, description et video dans la vue.
    DEPENDANCES : ngRoute, ngYoutubeEmbed
    */
    $scope.setExercice = function(x){
      $(".exercice").css("display", "block");
      $scope.name = x;
      angular.forEach($scope.exercices, function(item){
          if (item.nom == x) {
              $scope.description = item.description;
              $scope.video = item.video;
              $scope.videoURL = item.lien;

          }

      });
    };

    // Fonction qui permet de masquer l'overlay d'affichages de informations des exercies.
    $(".exercice-retour").click(function(){
      $(".exercice").css("display", "none");
    });




    $scope.exercices=[
        {nom: "Triple salto du bras gauche", description:"Debout ou assis, le dos bien droit, inclinez la tête sur un côté et tirez doucement avec votre main jusqu’à ressentir l’étirement à la base du cou. Pour plus d’amplitude, la main du côté étiré pourra être placée dans le dos. Étirez de la même façon l’autre côté.", lien: "https://www.youtube.com/watch?v=eLYhnBaWOzc"},
        {nom: "Triple salto du bras droit", description:"Faire tournoyer son bras droit dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=o85w80g2Aq4"},
        {nom: "Contraction de la fesse droite arrière", description:"Contracter la fesse droite arrière.", lien: "https://www.youtube.com/watch?v=y9eFk8TuV9k"},
        {nom: "Contraction de la fesse gauche arrière", description:"Contracter la fesse gauche arrière.", lien: "https://www.youtube.com/watch?v=PJielywHIjY"},
    ]


});
