var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);

app.controller('ProgrammeController', function($scope, $location, $anchorScroll) {
$anchorScroll();


  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;

  $("#commentaire").focusin(function(){

    $('.fin').addClass('fixed');
    window.scrollTo("0", "0");
  });

  $.ajax({
    type: 'POST',
    url: "http://ekine.iut-velizy.uvsq.fr/app/programme.php",
    //Type de data au retour des résultats.
    dataType: 'json',
    data: {
      //Cookie contenant l'id du patient.
      idPatient: cookie.id,
    },
    // Fonction lancée à la fin de traitement PHP.
    success: function(data) {
      $scope.programme = data;
      console.log(data);
      console.log($scope.programme);

      $nb = 0;
      angular.forEach($scope.programme, function(item) {
        $nb++;

      });
      $scope.nb = $nb;
      $scope.$digest();
      console.log($scope.nb);

    }
  });

  $('.visage').click(function(){
    $lvl = $(this).attr('id');
    $('#lvl1').attr('src', "img/icones/01.svg");
    $('#lvl2').attr('src', "img/icones/02.svg");
    $('#lvl3').attr('src', "img/icones/03.svg");
    $('#lvl4').attr('src', "img/icones/04.svg");
    var string = $(this).attr('src');
    var nombre = string.match(/\d+/g).map(Number);
    $(this).attr('src', "img/icones/0"+nombre+"_ON.svg");
    console.log(nombre);
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
        $('.overlay-valider-programme').css("display", "flex");
      }
    });
  });

  //TODO Refactoring, deux fontction qui font la même chose, penser à supprimer l'une des deux fonction et juste changer le paramètre de la fonction dans le HTML.
  $scope.setFirstexercice = function(x) {
    //On parcours le scope avec une boucle for
    angular.forEach($scope.programme, function(item) {
      //Lorsque l'id entré en paramètre correspond à l'id de l'exo, on update la valeur du scope avec l'url de la nouvelle video
      if (item.id == x) {
        $scope.videoURL = item.Lien;
      }
    });
  }

  $scope.setNextVideo = function(x) {
    angular.forEach($scope.programme, function(item) {
      if (item.id == x) {
        console.log(item.id);
        $scope.videoURL = item.Lien;
      }
    });
  };



});
