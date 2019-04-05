var app = angular.module('ProgrammeGenerator', ['ngRoute', 'ngYoutubeEmbed']);
//Appel des services angular NgRoute et ngYoutubeEmbed.

app.controller('ProgrammeController', function($scope, $location, $anchorScroll) {
  //Fonction qui permet l'utilisation des ancres en mode routage angular.
  $anchorScroll();

  var cookie = Cookies.get();
  $scope.idCookie = cookie.id;

  // $.ajax({
  //   type: 'POST',
  //   url: "php/programme.php",
  //   //Type de data au retour des résultats.
  //   dataType: 'json',
  //   data: {
  //     //Cookie contenant l'id du patient.
  //     idPatient: cookie.id,
  //   },
  //   // Fonction lancée à la fin de traitement PHP.
  //   success: function(data) {
  //     console.log(data);
  //     //On place les données du résultat dans une variable du scope.
  //     $scope.programme = data;
  //     var count = Object.keys($scope.programme).length;
  //     $scope.nb = count;
  //     // //Mise à jour du scope.
  //     $scope.$digest();
  //
  //
  //
  //   }
  // });


  /* Fonction appelée lors de l'appui sur le bouton go.
  Permet d'attribuer au champ vidéo du premier exercice un lien Youtube */
  $scope.setFirstexercice = function(x) {
    //On parcours tous les objets
    angular.forEach($scope.programme, function(item) {
      //Si l'id de l'exercice suivant concorde avec un id du tableau, alors cela veut dire qu'il y a un exerice après.
      if (item.id == x) {
        //On change alors le lien de la video
        $scope.videoURL = item.lien;
        console.log($scope.videoURL);
        console.log(item.id);
      }
    });
  }

  /* Fonction appelée à chaque fois que l'on appuis sur suivant ou précedent (qui sont des liens html).*/
  $scope.setNextVideo = function(x) {
    angular.forEach($scope.programme, function(item) {
      if (item.id == x) {
        $scope.videoURL = item.lien;
        console.log(item.id);
      }
    });
  };

  $scope.programme = [{
      id: 0,
      nom: "Triple salto du bras gauche",
      description: "Debout ou assis, le dos bien droit, inclinez la tête sur un côté et tirez doucement avec votre main jusqu’à ressentir l’étirement à la base du cou. Pour plus d’amplitude, la main du côté étiré pourra être placée dans le dos. Étirez de la même façon l’autre côté.",
      lien: "https://www.youtube.com/watch?v=eLYhnBaWOzc",
      duree: 30,
      repetition: 8
    },
    {
      id: 1,
      nom: "Triple salto du bras droit",
      description: "Faire tournoyer son bras droit dans le sens antéchronologique des aiguilles d'une montre.",
      lien: "https://www.youtube.com/watch?v=o85w80g2Aq4",
      duree: 5,
      repetition: 20
    },
    {
      id: 2,
      nom: "Contraction de la fesse droite arrière",
      description: "Contracter la fesse droite arrière.",
      lien: "https://www.youtube.com/watch?v=y9eFk8TuV9k",
      duree: 20,
      repetition: 6
    },
    {
      id: 3,
      nom: "Contraction de la fesse gauche arrière",
      description: "Contracter la fesse gauche arrière.",
      lien: "https://www.youtube.com/watch?v=PJielywHIjY",
      duree: 3,
      repetition: 30
    },
  ]

  // var count = Object.keys($scope.programme).length;
  // console.log(count);
  // var i = 0;
  // console.log($scope.programme);
  // // angular.forEach($scope.programme, function(value) {
  // //   value.push("truc" + ': ' + i);
  // //   i++;
  // // });
  // console.log($scope.programme);
  // for (var i = 0; i <= 3; i++){
  //   $scope.programme['truc'] = i;
  // }
  // console.log($scope.programme);
  // console.log($scope.);
  //

});
