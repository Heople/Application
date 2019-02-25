
  var app=angular.module('myapp', ['ngRoute', 'ngYoutubeEmbed']);
  app.controller('exercice',function($scope) {

    $scope.name = "Triple salto du bras gauche";
    $scope.description ="Faire tournoyer son bras gauche dans le sens antéchronologique des aiguilles d'une montre.";
    $scope.videoURL = 'https://www.youtube.com/watch?v=XWEkGT7XP08';
    $(".menu-exercice-item").click(function(){
      $(".exercice").css("display", "block");
        $nom = $(this).text();
        $scope.name = $nom;
    });

    $(".exercice-retour").click(function(){
      $(".exercice").css("display", "none");
    });




    $scope.exercices=[
        {nom: "Triple salto du bras gauche", description:"Faire tournoyer son bras gauche dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=XWEkGT7XP08"},
        {nom: "Triple salto du bras droit", description:"Faire tournoyer son bras droit dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=o85w80g2Aq4"},
        {nom: "Contraction de la fesse droite arrière", description:"Contracter la fesse droite arrière.", lien: "https://www.youtube.com/watch?v=y9eFk8TuV9k"},
        {nom: "Contraction de la fesse gauche arrière", description:"Contracter la fesse gauche arrière.", lien: "https://www.youtube.com/watch?v=PJielywHIjY"},
    ]

    $scope.setExercice = function(x){
      $scope.name = x;
      angular.forEach($scope.exercices, function(item){
            if (item.nom == x) {
                $scope.description = item.description;
                $scope.video = item.video;
                $scope.videoURL = item.lien;

            }

          });
    };
});