
  var app = angular.module('ExerciceCompletion', ['ngRoute', 'ngYoutubeEmbed']);
  app.controller('ExerciceController',function($scope) {

    //Récupération des cookies, certains seront utilisées lors des requêtes
    var cookie = Cookies.get();
    $scope.idCookie = cookie.id;

    //Appel Ajax, récupération des exercices en fonction du profil.
    $.ajax({
      type: 'POST',
      // url: "php/exercice.php",
      url: "http://ekine.iut-velizy.uvsq.fr/app/exercice.php",
      dataType: 'json',
      data: {
        idPatient: cookie.id,
      },
      success: function(data){
        console.log(data);
        $scope.exercices = data.resultat;
        // console.log($scope.exercices);
        // Actualisation du scope
        $scope.$digest();
        console.log($scope.exercices);



      }
    });



    /* Initialisation de "fausses" données. Permet d'empecher l'erreur mineure "invalid youtube video URL or ID to render the iframe embed player".  */
    $scope.name = "nom placeholder";
    $scope.description ="description placeholder.";
    $scope.videoURL = 'https://www.youtube.com/watch?v=XWEkGT7XP08';

    /* Fonction appellée au clique sur un exercice sur la home PAGE
    Permet de changer dynamiquement les champs Nom, description et video dans la vue.
    DEPENDANCES : ngRoute, ngYoutubeEmbed
    */
    $scope.setExercice = function(x){
      $(".exercice").css("display", "block");
      $scope.name = x;
      angular.forEach($scope.exercices, function(item){
          if (item.Nom_exo == x) {
              $scope.description = item.Description;
              $scope.video = item.video;
              $scope.videoURL = item.lien;
          }

      });
    };

    // Fonction qui permet de masquer l'overlay d'affichages de informations des exercies.
    $(".exercice-retour").click(function(){
      $(".exercice").css("display", "none");
    });

    // Retire les cookies au click. Permet de se déconnecter
    $("#button-deconnexion").click(function(){
      Cookies.remove('id');
      Cookies.remove('keepMeAlive');
    });

    //
    //
    // $scope.exercices=[
    //     {nom: "Triple salto du bras gauche", description:"Faire tournoyer son bras gauche dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=eLYhnBaWOzc"},
    //     {nom: "Triple salto du bras droit", description:"Faire tournoyer son bras droit dans le sens antéchronologique des aiguilles d'une montre.", lien: "https://www.youtube.com/watch?v=o85w80g2Aq4"},
    //     {nom: "Contraction de la fesse droite arrière", description:"Contracter la fesse droite arrière.", lien: "https://www.youtube.com/watch?v=y9eFk8TuV9k"},
    //     {nom: "Contraction de la fesse gauche arrière", description:"Contracter la fesse gauche arrière.", lien: "https://www.youtube.com/watch?v=PJielywHIjY"},
    // ]


});
