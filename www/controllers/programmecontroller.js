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

  $scope.programme = [{
    id: 0,
    nom: "Rotation du tronc",
    description: "Debout ou assis, le dos bien droit, inclinez la tête sur un côté et tirez doucement avec votre main jusqu’à ressentir l’étirement à la base du cou. Pour plus d’amplitude, la main du côté étiré pourra être placée dans le dos. Étirez de la même façon l’autre côté.",
    lien: "https://youtu.be/HSP2HMTSABg",
    duree: 30,
    repetition: 8
  }, {
    id: 1,
    nom: "Etirement du sphinx",
    description: "Allongez vous sur le ventre. Appuyez vous sur vos avants bras, en plaçant vos coudes sous vos épaules, mains à plat, poussez sur vos mains pour vous redresser jusqu'où vous pouvez ne décollez pas votre bassin du sol",
    lien: "https://youtu.be/7HwBLchKep4",
    duree: 5,
    repetition: 20
  }, {
    id: 2,
    nom: "Etirement pelvi",
    description: "Allongez vous sur le dos, les jambes pliées placez le pied droit par dessus le genou gauche, vos jambes forment alors un 4. Poussez alors le genou droit à l'aide de votre main droite, vers l’extérieur. vous devez sentir l’étirement sur le côté de la hanche droite",
    lien: "https://youtu.be/as7oWYzZ4dM",
    duree: 20,
    repetition: 6
  }, {
    id: 3,
    nom: "Superman",
    description: "Sur le ventre, ventre bien rentré (« nombril à la colonne ») la fesse gauche arrière. Jambes tendues,décoller le buste et les jambes en cherchant à allonger, grandir la colonne vertébrale. Regard vers le support, Bras le long du corps, paumes des mains face contre la table.",
    lien: "https://youtu.be/ly-EwtGoAxo",
    duree: 3,
    repetition: 30
  }, ]

  $scope.setFirstexercice = function(x) {
    angular.forEach($scope.programme, function(item) {
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
