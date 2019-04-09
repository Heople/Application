var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);

app.controller('ProgrammeController', function($scope, $location, $anchorScroll) {
$anchorScroll();


  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;

  $('.visage').click(function(){
    $lvl = $(this).attr('id');
    console.log($lvl);
  });

  $('#send-feedback').click(function(){
    $feedback = $('#commentaire').val();
    console.log($feedback);

    $.ajax({
      type: 'POST',
      url: "http://ekine.iut-velizy.uvsq.fr/app/insertionfeedback.php",
      //Type de data au retour des résultats.
      data: {
        //Cookie contenant l'id du patient.
        texte: $feedback,
        lvl: $lvl,
        idPatient: cookie.id,
      },
      // Fonction lancée à la fin de traitement PHP.
      success: function(data) {
        console.log(data);
      }
    });
  });

  //TODO Refactoring, deux fontction qui font la même chose, penser à supprimer l'une des deux fonction et juste changer le paramètre de la fonction dans le HTML.
  $scope.setFirstexercice = function(x) {
    //On parcours le scope avec une boucle for
    angular.forEach($scope.programme, function(item) {
      //Lorsque l'id entré en paramètre correspond à l'id de l'exo, on update la valeur du scope avec l'url de la nouvelle video
      if (item.id == x) {
        $scope.videoURL = item.lien;
      }
    });
  }

  $scope.setNextVideo = function(x) {
    angular.forEach($scope.programme, function(item) {
      if (item.id == x) {
        $scope.videoURL = item.lien;
      }
    });
  };



});
