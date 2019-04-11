var app = angular.module('RDV', []);
//Appel des services angular NgRoute et ngYoutubeEmbed.

app.controller('rdvcontroller', function($scope) {
  //Récupération des cookies, certains seront utilisées lors des requêtes.
  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;


  //Appel Ajax, récupération des rendez-vous en fonction du profil.
  $.ajax({
    type: 'POST',
    url: "php/rdv.php",
    //Type de data au retour des résultats.
    dataType: 'json',
    data: {
      //Cookie contenant l'id du patient.
      idPatient: cookie.id,
    },
    // Fonction lancée à la fin de traitement PHP.
    success: function(data) {
      $scope.planning = data;
      console.log(data);
      console.log($scope.planning);
      console.log($scope.planning);
      console.log($scope.planning);
      $scope.$digest();
      }
      //Mise à jour du scope.
      // $scope.$digest();



  });



});
