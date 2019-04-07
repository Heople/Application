  var app = angular.module('ExerciceCompletion', ['ngRoute', 'ngYoutubeEmbed']);
  //Appel des services angular NgRoute et ngYoutubeEmbed.

  app.controller('ExerciceController', function($scope) {
    //Récupération des cookies, certains seront utilisées lors des requêtes.
    var cookie = Cookies.get();
    $scope.idCookie = cookie.id;

    //Appel Ajax, récupération des exercices en fonction du profil.
    $.ajax({
      type: 'POST',
      url: "http://ekine.iut-velizy.uvsq.fr/app/exercice.php",
      //Type de data au retour des résultats.
      dataType: 'json',
      data: {
        //Cookie contenant l'id du patient.
        idPatient: cookie.id,
      },
      // Fonction lancée à la fin de traitement PHP.
      success: function(data) {
        //On place les données du résultat dans une variable du scope.
        $scope.exercices = data.resultat;
        $verifEmpty = $scope.exercices;

        //On verifie si des exercices ont été trouvés pour le patient.
        //Si non, on affiche un block disant qu'il n'y a pas d'exercice.
        if (jQuery.isEmptyObject($verifEmpty) == true){
          $('.aucun-exo').css("display", "block");
        }
        //Mise à jour du scope.
        $scope.$digest();



      }
    });

    /* Initialisation de "fausses" données. Permet d'empecher l'erreur mineure "invalid youtube video URL or ID to render the iframe embed player".  */
    $scope.name = "nom placeholder";
    $scope.description = "description placeholder.";
    $scope.videoURL = 'https://www.youtube.com/watch?v=XWEkGT7XP08';

    /* Fonction appellée au clique sur un exercice sur la home page
    Permet de changer dynamiquement les champs Nom, description et video dans la vue.
    DEPENDANCES : ngRoute, ngYoutubeEmbed
    */
    $scope.setExercice = function(x) {
      $(".exercice").css("display", "block");
      $scope.name = x;
      angular.forEach($scope.exercices, function(item) {
        if (item.Nom_exo == x) {
          //Lorsque le nom correspond à l'exercice choisit, on redéfénit les variables du scope.
          $scope.description = item.Description;
          $scope.videoURL = item.Lien;
        }

      });
    };

    // Fonction qui permet de masquer l'overlay d'affichages de informations des exercies.
    $(".exercice-retour").click(function() {
      $(".exercice").css("display", "none");
    });

    // Retire les cookies au click. Permet de se déconnecter
    $("#button-deconnexion").click(function() {
      Cookies.remove('id');
      Cookies.remove('keepMeAlive');
    });
  });
