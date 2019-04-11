var app = angular.module('Kine', []);
//Appel des services angular NgRoute et ngYoutubeEmbed.

app.controller('KineController', function($scope) {
  //Récupération des cookies, certains seront utilisées lors des requêtes.
  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;

  $scope.nom = "e";
  $scope.email = "e";
  $scope.ville = "e";
  $scope.telephone = "e";

  //Appel Ajax, récupération des exercices en fonction du profil.
  $.ajax({
    type: 'POST',
    url: "http://ekine.iut-velizy.uvsq.fr/app/infokine.php",
    //Type de data au retour des résultats.
    dataType: 'json',
    data: {
      //Cookie contenant l'id du patient.
      idPatient: cookie.id,
    },
    // Fonction lancée à la fin de traitement PHP.
    success: function(data) {
      $scope.kine = data.resultat;
      angular.forEach($scope.kine, function(item) {
        $scope.nom = item.Nom_kine;
        $scope.telephone = item.Tel_kine;
        $scope.adresse = item.Adresse;
        $scope.email = item.E_mail;


      });

      $scope.$digest();
      }
      //Mise à jour du scope.
      // $scope.$digest();



  });

  $('.telephone-kine').click(function(){
    var tel = $('#number').html();
    console.log("truc");
    console.log(tel);
    window.plugins.CallNumber.callNumber(onSuccess, onError, "0602655083");
  });

  function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}

});
