var app = angular.module('Compte', []);
//Appel des services angular NgRoute et ngYoutubeEmbed.

app.controller('CompteController', function($scope) {
  //Récupération des cookies, certains seront utilisées lors des requêtes.
  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;
  console.log("ok");

  $scope.nom = "";
  $scope.prenom = "";
  $scope.email = "";
  $scope.adresse = "";
  $scope.email = "";
  $scope.antecedent = "";

  //Appel Ajax, récupération des exercices en fonction du profil.
  $.ajax({
    type: 'POST',
    url: "http://ekine.iut-velizy.uvsq.fr/app/infopatient.php",
    //Type de data au retour des résultats.
    dataType: 'json',
    data: {
      //Cookie contenant l'id du patient.
      idPatient: cookie.id,
    },
    // Fonction lancée à la fin de traitement PHP.
    success: function(data) {
      $scope.patient = data.resultat;
      console.log($scope.patient);
      angular.forEach($scope.patient, function(item) {
        $scope.nom = item.Nom;
        $scope.prenom = item.Prenom;
        $scope.email = item.Email;
        $scope.tel = item.Tel;
        $scope.antecedent = item.Antecedents;
        $scope.naissance = item.DatedeNaissance;


      });

      $scope.$digest();
      }
      //Mise à jour du scope.
      // $scope.$digest();







  });

});
